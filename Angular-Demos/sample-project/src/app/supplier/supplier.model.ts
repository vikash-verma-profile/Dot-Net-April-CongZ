//ccc

//Create
//Connect
//Check

import { NgForm,FormGroup,Validators,FormBuilder, FormControl } from "@angular/forms";

export class Supplier{
    SupplierCode:string="";
    SupplierName:string="";
    SupplierAmount:number=0;
    formSupplierGroup:FormGroup;//Create

    /**
     *
     */
    constructor() {
       var _builder=new FormBuilder();
       this.formSupplierGroup=_builder.group({});

       //Control==>validation
       this.formSupplierGroup.addControl("SupplierNameControl",new FormControl('',Validators.required));


       var validationcollection=[];
       validationcollection.push(Validators.required);
       validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));

       this.formSupplierGroup.addControl("SupplierCodeControl",new FormControl('',Validators.compose(validationcollection)));
    }


}