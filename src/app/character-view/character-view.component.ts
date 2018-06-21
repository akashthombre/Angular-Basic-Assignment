import { Component, OnInit } from '@angular/core';
import { DataHttpService } from '../data-http.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  public currentCharacter;
  public id;
  constructor(public dataHttpService:DataHttpService, private _route:ActivatedRoute, public router:Router) {
    console.log("Character-View component is called");
   }

  ngOnInit() {
//To access route id from address bar
  this.id =   this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    //subscribe to observable response

    this.dataHttpService.getSingleCharacterView(this.id).subscribe(
      data => {
        console.log("fetching data...");
        console.log(data);
        this.currentCharacter = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

}
