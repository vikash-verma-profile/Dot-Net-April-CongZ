import { Component } from '@angular/core';
import {Customer} from './app.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';

  sample="Vikash Verma"

  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();

  AddCustomer(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel=new Customer();
    console.log(this.CustomerModels);
  }
}
