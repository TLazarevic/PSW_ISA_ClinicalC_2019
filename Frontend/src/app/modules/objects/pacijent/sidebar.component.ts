import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-and-register-service/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarPacijentComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private loginService:LoginService) { }

  ngOnInit() {
  }

  odjava(){
    this.loginService.odjava().subscribe(data => {
      alert("Uspešno ste se odjavili!")
    });
}

}
