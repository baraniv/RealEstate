import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IPropertyBase> = [];
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

        const newProperty = JSON.parse(localStorage.getItem('newProp') || "");
        if (newProperty.SellRent === this.SellRent) {
          this.properties = [newProperty, ...this.properties];
        }
        console.log(data);
     },error => {
       console.log(error);
     }
    )
  }

}
