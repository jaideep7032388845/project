import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CustomersComponent } from '../customers/customers.component';
import { HeaderComponent } from '../header/header.component';
import { OrdersComponent } from '../orders/orders.component';

const appRoutes: Routes = [
    {path:'', redirectTo: '/header', pathMatch: 'full'},
    {path:'header', component: HeaderComponent, children: [
        { path: 'customers', component: CustomersComponent},
        { path: 'orders', component: OrdersComponent}
    
    ]},

   ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}