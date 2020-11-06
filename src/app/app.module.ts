import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule} from  '@angular/material/toolbar'
import {  MatIconModule } from  '@angular/material/icon'
import {   MatSidenavModule } from  '@angular/material/sidenav'
import {   MatListModule } from  '@angular/material/list'
import {   MatButtonModule } from  '@angular/material/button'
import { SideNavService } from './service/sidenav.service';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component'
import { AppRoutingModule } from './routing/app-routing.module';
import { HeaderComponent } from './header/header.component'
import { RouterModule } from '@angular/router'

import { DetailsService}  from './shared/details.service'


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    
    AppRoutingModule,
    RouterModule
  ],
  providers: [SideNavService,DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
