import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {ZdravstveniKarton} from '../../models/zdravstvenik/zdravstveniKarton';
import {Izvestaj} from '../../models/izvestaj/izvestaj';
import {Observable} from 'rxjs';
import {IzvestajDto} from '../../models/izvestajDTO/izvestaj-dto';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class IzvestajService {

  constructor(private http: HttpClient) { }

  public getByZk(idZk: number) {
    const body = JSON.stringify(idZk);
    return this.http.post('/server/izvestaj/getIzvestaje', body, httpOptions);
  }

  public updateIzvestaj(izvestajDTO: IzvestajDto) {
    const body = JSON.stringify(izvestajDTO);
    return this.http.post('/server/izvestaj/updateIzvestaj', body, httpOptions);
  }

  public save(izvestaj: Izvestaj) {
    const body = JSON.stringify(izvestaj);
    return this.http.post('/server/izvestaj/save', body, httpOptions);
  }

  public getReceptByIzvestajId(izvestajId: number) {
    const body = JSON.stringify(izvestajId);
    return this.http.post('/server/izvestaj/getReceptByIzvestajId', body, httpOptions);
  }
}
