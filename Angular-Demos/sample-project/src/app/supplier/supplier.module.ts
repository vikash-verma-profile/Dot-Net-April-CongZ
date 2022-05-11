import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../Routing/app.SupplierRoutes';
import { GridUtiliyModule } from '../utility/utility.module';
import { SupplierComponent } from './supplier.component';


@NgModule({
  declarations: [
 SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SupplierRoutes),
    GridUtiliyModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
