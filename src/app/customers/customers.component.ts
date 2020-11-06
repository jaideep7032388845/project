import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
    
  constructor(public detailsService: DetailsService) { }
  data = this.detailsService.getDetails( );
  
  
  
  
  
  // search() {
    
  //   this.detailsService.getDetails();
  // }
  

  ngOnInit(): void {
  }
  

}
