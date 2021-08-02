import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // geting the id of clicked card.
    this.propertyId = +this.route.snapshot.params['id'];
    // checking for changes in the route parameters & and take action based on the changes...
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id']
      }
    )
  }

  onSelectNext(){
    this.propertyId = this.propertyId+= 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }

}
