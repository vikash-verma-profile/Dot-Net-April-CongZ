import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/app.CustomerRoutes';
import { GridComponent } from '../utility/utility.gridcomponent';
import { GridUtiliyModule } from '../utility/utility.module';
import { CustomerComponent } from './customer.component';


@NgModule({
  declarations: [
  CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule,
    GridUtiliyModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
