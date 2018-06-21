import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataHttpService} from '../data-http.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  public currentBook;
  public id;
  constructor(public dataHttpService:DataHttpService, private _route:ActivatedRoute, private router:Router) { 
    console.log("book view constructor called");  
  }

  ngOnInit() {

    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.dataHttpService.getSingleBookView(this.id).subscribe(
      data => {
        console.log("Fetching data...");
        console.log(data);
        this.currentBook = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

  }

}
