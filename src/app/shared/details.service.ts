import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
   public customers = [];
     
   
   
  
   constructor() { }

   addDetails(first_name: string,last_name:string,address:string,state:string, city:string) {
     this.customers.push(first_name,last_name,address,city,state);

  }
   
  getDetails() {
    console.log(this.customers)
      return this.customers;
      
  }

}
