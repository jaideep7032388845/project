import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../service/sidenav.service'
import { Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';

import { DetailsService } from '../shared/details.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public sidenav: SideNavService,
              public detailsService: DetailsService,
              private router: Router,
              private route: ActivatedRoute ) { }
  
  add(form: NgForm) {
    const value = form.value;
    this.detailsService.addDetails(value.first_name,value.last_name,value.address,value.city,value.state);
   // this.router.navigate(['customers'], {relativeTo: this.route})
  }
  update() {}
  delete() {}
  customersPage() {
  this.router.navigate(['customers'], {relativeTo: this.route})
  }
  
  ordersPage() {
    this.router.navigate(['orders'], {relativeTo: this.route})
  }
  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   const value = form.value;
  //   this.detailsService.addDetails(value.first_name,value.last_name,value.address,value.city,value.state);
  // }

}
