import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Korisnik} from 'src/app/models';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(user: Korisnik) {
<<<<<<< HEAD
     const user1 = JSON.stringify(user)
     return this.http.post(`/server/register/registrationSubmit`, user1);
=======
     const user1 = JSON.stringify(user);
     return this.http.post(`/server/register/registrationSubmit`, user1, httpOptions);
>>>>>>> b828c1f87692579a75adc5b13ea6216189717ebd
   }
}