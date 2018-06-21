import { Component, OnInit } from '@angular/core';

import { DataHttpService } from '../data-http.service';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent implements OnInit {
  public books;
  public houses;
  public characters;
  constructor(public dataHttpService:DataHttpService) { 
    console.log("view-one constructor is called");
  }
  
  ngOnInit() {

    //for getting allBooks
    this.books = this.dataHttpService.getAllBooks().subscribe(
      data => {
        console.log(data);
        console.log("data logging in");
        this.books = data;
      },
      error => {
        console.log("some error occured");
      console.log(error.errorMessage);
      }
    );

    //for getting allHouses
    
    this.houses = this.dataHttpService.getAllHouses().subscribe(
      data => {
        console.log("data logging in");
        console.log(data);
        this.houses=data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    //for getting allCharcters
    this.dataHttpService.getAllCharcters().subscribe(
      data => {
        console.log("data logging in");
        console.log(data);
        this.characters = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
   

  }    
  //to get id from url
  getItemId(item) {
    const id = item.url.match(/\d+/)[0];
    return id;
}

}
