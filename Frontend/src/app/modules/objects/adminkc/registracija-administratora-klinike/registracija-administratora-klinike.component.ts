import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import { HelperUserClass } from 'src/app/helpers/helper-user-class';
import { AdminKlinikeService } from 'src/app/services/admin-klinike-service/admin-klinike.service';
import { KlinikaService } from 'src/app/services/klinika-service/klinika.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registracija-administratora-klinike',
  templateUrl: './registracija-administratora-klinike.component.html',
  styleUrls: ['./registracija-administratora-klinike.component.css']
})
export class RegistracijaAdministratoraKlinikeComponent implements OnInit {
  submitted = false;
  helperClass: HelperUserClass;
  loading = false;
  adminForm: FormGroup;
  klinike = null;
  constructor(private _snackBar: MatSnackBar,private route: ActivatedRoute,
              private router: Router,
              private AdminService: AdminKlinikeService,
              private klinikaService: KlinikaService,
              private formBuilder: FormBuilder
  ) {
    this.helperClass = new HelperUserClass();
    this.getKlinike();
  }

  getKlinike() {
    this.klinikaService.getKlinike().subscribe(
      data => this.klinike = data,
      err => console.log('Neuspesno ucitani podaci'),
      () => console.log('Podaci uspesno ucitani')
    );
  }

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      adresa: [''],
      kontaktTelefon: [''],
      drzava: [''],
      grad: [''],
      ime: ['', [Validators.required, Validators.required]],
      prezime: ['', [Validators.required, Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      lozinka: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$'
      )]],
      // tipKorisnika: ['', Validators.required],
      jbo: ['', [Validators.required,  Validators.minLength(9), Validators.maxLength(9)]],
      klinika: ['']
    },  {
    });
  }

  onSubmit() {
    console.log(this.adminForm.value);
    if (this.adminForm.invalid) {
      return;
    }

    this.submitted = true;
    // stop here if form is invalid

    this.loading = true;
    this.AdminService.save(this.helperClass).pipe(first()).subscribe(result => {
        alert('Prosledjivanje zahteva');
        result.prvoLogovanje = true;
      },
      error => {
        this.router.navigate(['administratorKc'])
        this.loading = false;
      },
      () => console.log('Korisnik registrovan!'));
  }

  get f() { return this.adminForm.controls; }

}
