//ccc

//Create
//Connect
//Check
import { NgForm,FormGroup,Validators,FormBuilder, FormControl } from "@angular/forms";

export class Customer{
    customerCode:string="";
    customerName:string="";
    customerAmount:number=0;
    formCustomerGroup:FormGroup;//Create

    /**
     *
     */
    constructor() {
       var _builder=new FormBuilder();
       this.formCustomerGroup=_builder.group({});

       //Control==>validation
       this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));

    }


}