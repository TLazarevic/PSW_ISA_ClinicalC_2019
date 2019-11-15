import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { LoginComponent } from './home/login';
import { RegisterComponent } from './home/register';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MustMatch} from './_helpers/MustMatch';

import {AdministratorKlinikeComponent} from './modules/objects/administratorklinike/administrator_klinike.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {SidebarComponent} from './modules/objects/administratorklinike/sidebar.component';
import {SidebarLekarComponent} from './modules/objects/lekar/sidebarLekar.component';
import {LekarComponent} from './modules/objects/lekar/lekar.component';
import {LekarPregledComponent} from './modules/objects/lekar/lekarPregled.component';
import {AdministratorKlinikePregledComponent} from './modules/objects/administratorklinike/administratorKlinikePregled.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AdministratorKlinikeComponent,
    SidebarComponent,
    LekarComponent,
    SidebarLekarComponent,
    LekarPregledComponent,
    AdministratorKlinikePregledComponent,
    SidebarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([{ path: 'administratorklinike', component: AdministratorKlinikeComponent},
      { path: 'lekar', component: LekarComponent},
      { path: 'lekarPregled', component: LekarPregledComponent},
      { path: 'administratorPregled', component: AdministratorKlinikePregledComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'welcome', component: HomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: NotFoundComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
