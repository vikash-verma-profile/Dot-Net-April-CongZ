import { CustomerComponent } from "../customer/customer.component";
import { HomeComponent } from "../home/home.component";
import { SupplierComponent } from "../supplier/supplier.component";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'Supplier', component: SupplierComponent },
    { path: '', component: HomeComponent }
];