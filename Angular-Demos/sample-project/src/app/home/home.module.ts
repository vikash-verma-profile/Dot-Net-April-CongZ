import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/app.MainRoutes';
import { HomeComponent } from './home.component';
import { MasterComponent } from './master.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
   HomeComponent,
   MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
