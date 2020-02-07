import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Pacijent} from '../../models/pacijent/pacijent';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PacijentService {

  constructor(private http: HttpClient) {
  }

  public getUlogovanKorisnik(): Observable<Pacijent> {
    return this.http.get<Pacijent>('/server/korisnik/ulogovanKorisnik', httpOptions);
  }

  public update(pac: Pacijent) {
    const pacijent = JSON.stringify(pac);
    return this.http.post<Pacijent>('/server/pacijent/update' , pacijent, httpOptions);
  }

  getPacijenti() {
    return this.http.get('/server/pacijent/allZahtevi');
  }

  getPacijentiAll() {
    return this.http.get('/server/pacijent/all');
  }
}
