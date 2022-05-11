import { Component } from '@angular/core';
import { Supplier } from './supplier.model';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './Supplier.component.html'
})
export class SupplierComponent {
  title = 'sample-project';
  imageUrl = '././assets/sample.jpg';
  sample = "Vikash Verma"

  constructor(public httpc: HttpClient) {
    this.GetFromServer();
  }
  SupplierModel: Supplier = new Supplier();
  SupplierModels: Array<Supplier> = new Array<Supplier>();

  AddSupplier() {
    //this.SupplierModels.push(this.SupplierModel);
    this.httpc.post("https://localhost:44318/api/Supplier", this.SupplierModel).subscribe(res=>this.Success,res=>this.Error);
    this.SupplierModel = new Supplier();
    this.GetFromServer();
    //console.log(this.SupplierModels);
  }

  Error(res:any){
    console.log(res);
  }
  Success(res:any){
    console.log(res);
  }

  GetFromServer(){
    debugger;
    this.httpc.get("https://localhost:44318/api/Supplier").subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res))
  }
  SuccessGet(res:any){
    console.log(res);
    
    this.SupplierModels=res;
    console.log(this.SupplierModels);
  }
  ErrorGet(res:any){
    console.log(res);
  }
  EditSupplier(input: Supplier) {

    this.SupplierModel = input;

  }
  DeleteSupplier(input: Supplier) {
    console.log(input);
  }

  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.SupplierModel.formSupplierGroup.controls[controlname].hasError(typeofvalidator);
  }
}
