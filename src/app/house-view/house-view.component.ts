import { Component, OnInit } from '@angular/core';
import {DataHttpService } from '../data-http.service';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public currentHouse;
  public id;
  constructor(public dataHttpService:DataHttpService, private _route:ActivatedRoute, private router:Router) {
    console.log("House-View component is called");
   }

  ngOnInit() {
    //to access id from route
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    //subscribe observable response 
    this.dataHttpService.getSingleHouseView(this.id).subscribe(
      data => {
        console.log("Fetching House Detail...");
        console.log(data);
        this.currentHouse = data;
      }, 
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

  }

}
