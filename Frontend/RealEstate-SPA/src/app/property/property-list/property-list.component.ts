import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [];
  SellRent = 1;

  constructor(private housingService: HousingService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2; // Means we are on the rent-property URL else we on base URL
    }
    this.housingService.getAllProperties().subscribe(
      data =>{
        this.properties=data;
        console.log(data);
     },error => {
       console.log(error);
     }
    )
  }

}
