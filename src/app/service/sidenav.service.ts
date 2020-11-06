import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
   hideSideNav: boolean = false;
  
   constructor() { }

   toggle(): void {
     this.hideSideNav = !this.hideSideNav;
   }
}
