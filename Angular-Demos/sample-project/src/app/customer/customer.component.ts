import { Component } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  title = 'sample-project';
  imageUrl = '././assets/sample.jpg';
  sample = "Vikash Verma"

  constructor(public httpc: HttpClient) {
    this.GetFromServer();
  }
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  AddCustomer() {
    //this.CustomerModels.push(this.CustomerModel);

    var customerdto={
      customerCode:this.CustomerModel.customerCode,
      customerAmount:this.CustomerModel.customerAmount,
      customerName:this.CustomerModel.customerName
    }
    this.httpc.post("https://localhost:44318/api/Customer", customerdto).subscribe(res=>{  this.GetFromServer();this.CustomerModel = new Customer();},res=>this.Error);
    
  
    //console.log(this.CustomerModels);
  }

  Error(res:any){
    console.log(res);
  }
  Success(res:any){
    console.log(res);
  }

  GetFromServer(){
    debugger;
    this.httpc.get("https://localhost:44318/api/Customer").subscribe(res=>this.SuccessGet(res),res=>this.ErrorGet(res))
  }
  SuccessGet(res:any){
    console.log(res);
    
    this.CustomerModels=res;
    console.log(this.CustomerModels);
  }
  ErrorGet(res:any){
    console.log(res);
  }
  EditCustomer(input: Customer) {

    this.CustomerModel = input;

  }
  DeleteCustomer(input: Customer) {
    console.log("Delete Data from Grid");
    console.log(input.id);
    let httparms=new HttpParams().set("Id",input.id)
    let options={params:httparms};
    this.httpc.delete("https://localhost:44318/api/Customer/delete", options).subscribe(res=>{this.GetFromServer();});
  
  }

  DeleteSuccess(res:any){
    console.log("Hi");
    console.log(res);
    this.GetFromServer();
  }

  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  }

  SelectCustomer(_selected:Customer){
    console.log("Data from Grid");
    console.log(_selected);
    this.CustomerModel.customerAmount=_selected.customerAmount;
    this.CustomerModel.customerCode=_selected.customerCode;
    this.CustomerModel.customerName=_selected.customerName;
  }
}
