import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './home/master.component';
import { MainRoutes } from './Routing/app.MainRoutes';
import { SupplierComponent } from './supplier/supplier.component';

@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    SupplierComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
