import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogConfig, MatDialog, MatSort, MatSnackBar } from '@angular/material';
import { TipPregleda } from 'src/app/models/tippregleda/tippregleda';
import { KlinikaService } from 'src/app/services/klinika-service/klinika.service';
import { AdminKlinikeService } from 'src/app/services/admin-klinike-service/admin-klinike.service';
import { AdministratorKlinike } from 'src/app/models/admink/administrator-klinike';
import { RegistracijaSalaComponent } from '../registracija-sala/registracija-sala.component';
import { RegistracijaTipovaComponent } from '../registracija-tipova/registracija-tipova.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tipovi-pregleda',
  templateUrl: './tipovi-pregleda.component.html',
  styleUrls: ['./tipovi-pregleda.component.css']
})
export class TipoviPregledaComponent implements OnInit {

  displayedColumns: string[] = ['naziv', 'specijalizacija', 'cena', 'Izmeni', 'Ukloni'];
  dataSource: any

  tipovi: TipPregleda[];
  adminKlinike: AdministratorKlinike = new AdministratorKlinike()

  registerDialog: any;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private adminkService: AdminKlinikeService, private klinikaService: KlinikaService) {
    this.dataSource = new MatTableDataSource(null);
  }

  ngOnInit() {
    this.adminkService.getUlogovanKorisnik()
      .subscribe(ulogovanKorisnik => {
        this.adminKlinike = ulogovanKorisnik;

        this.klinikaService.getTipovi(this.adminKlinike.klinika.id).subscribe(data => {
          this.tipovi = data
          this.dataSource = new MatTableDataSource(this.tipovi);
          this.dataSource.sort = this.sort;
        });
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ukloniTip(tip: TipPregleda) {
    this.klinikaService.removeTip(tip.id).subscribe(data => {
      alert(data.text)
    });
  }

  izmeniTip(tip: TipPregleda) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '500px';

    dialogConfig.data = {
      izmeni: true,
      tip: tip
    };

    this.registerDialog = this.dialog.open(RegistracijaTipovaComponent, dialogConfig);
    this.registerDialog.afterClosed().subscribe(result => {
      if (result != true) {

        this.klinikaService.updateTip(result).pipe(first()).subscribe(result => {
          alert(result.text);

          this.klinikaService.getTipovi(this.adminKlinike.klinika.id)
            .subscribe(data => {
              this.tipovi = data;
              this.dataSource = new MatTableDataSource(this.tipovi);
              this.dataSource.sort = this.sort;
            });
        },
          error => {
            alert('Neuspešna izmena!\n\n');
          });
      }

    });
  }


  showDialogRegister() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '500px';

    dialogConfig.data = {
      izmeni: false,
    };

    this.registerDialog = this.dialog.open(RegistracijaTipovaComponent, dialogConfig);
    this.registerDialog.afterClosed().subscribe(result => {
      if (result != true) {
        this.klinikaService.registerTip(result).pipe(first()).subscribe(result => {
          alert(result.text);
          this.klinikaService.getTipovi(this.adminKlinike.klinika.id)
            .subscribe(data => {
              this.tipovi = data;
              this.dataSource = new MatTableDataSource(this.tipovi);
              this.dataSource.sort = this.sort;
            });
        },
          error => {
            alert('Neuspešna registracija!\n\n');
          });
      }
    });
  }

}
