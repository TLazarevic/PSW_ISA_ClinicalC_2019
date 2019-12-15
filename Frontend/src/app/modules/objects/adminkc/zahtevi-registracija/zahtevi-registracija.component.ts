import { Component, OnInit } from '@angular/core';
import {KorisnikServiceService} from '../../../../_services/KorisnikService/korisnik-service.service';
import {Korisnik} from '../../../../models/korisnik';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DijalogOdbijanjeZahtevaComponent} from '../dijalog-odbijanje-zahteva/dijalog-odbijanje-zahteva.component';

import { PacijentService } from 'src/app/_services/PacijentService/pacijent.service';


@Component({
  selector: 'app-zahtevi-registracija',
  templateUrl: './zahtevi-registracija.component.html',
  styleUrls: ['./zahtevi-registracija.component.css']
})
export class ZahteviRegistracijaComponent implements OnInit {

  public korisnici;
  public poruka: string;
  public rezultatDijaloga: any;
  public izmenjeniKorisnik: Korisnik = new Korisnik();
  constructor(private korisnikService: KorisnikServiceService,
              public dialog: MatDialog) {
      this.getKorisnike();
  }

  ngOnInit() {
    this.getKorisnike();
    console.log(this.korisnici);
  }

  getKorisnike() {
    this.korisnikService.getNeregistrovaneKorisnike().subscribe(
      podaci => { this.korisnici = podaci; },
      err => console.log('Nisu ucitani korisnici'),
      () => console.log(this.korisnici)
    );
  }

  onItemAccepted(korisnik: Korisnik) {
    const indexKorisnika = this.korisnici.findIndex(item => item.jbo === korisnik.jbo);
    this.izmenjeniKorisnik = this.korisnici.find(item => item.jbo === korisnik.jbo);
    this.izmenjeniKorisnik.aktivnostNaloga = true;
    this.korisnici[indexKorisnika] = this.izmenjeniKorisnik;
    this.korisnikService.updateAktivnost(this.izmenjeniKorisnik).subscribe(
      data => korisnik,
      err => console.log('Neuspesno nabavljen korisnik'),
      () => console.log('Uspesno dobavljen korisnik')
    );
    this.korisnikService.updateAktivnost(this.izmenjeniKorisnik).subscribe(data => {
      this.getKorisnike();
    });
  }

  onItemRejected(korisnik: Korisnik) {
    const indexKorisnika = this.korisnici.findIndex(item => item.jbo === korisnik.jbo);
    this.openDialog(korisnik, this.korisnici, indexKorisnika);
  }

  openDialog(korisnik: Korisnik, korisnici: any, index: number): void {
    const dialogRef = this.dialog.open(DijalogOdbijanjeZahtevaComponent, {
      data: korisnik
    });

    dialogRef.afterClosed().subscribe(
      result => this.rezultatDijaloga = result,
      err => console.log('Neuspesno otvaranje prozora!'),
      () => {
        if (this.rezultatDijaloga !== 1) {
          this.korisnici.splice(index, 1);
        }
      });
  }
}
