import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataHttpService {

  public baseUrl = 'https://anapioficeandfire.com/api';
  constructor(public http: HttpClient) {
    console.log("Data-Http service constructor is called");
  }

  //method to return all books
  public getAllBooks(): any {
    let myResponse = this.http.get(this.baseUrl + '/books');
    console.log(myResponse);
    return myResponse;
  }

  //method to get allHouses
  public getAllHouses(): any {

    let myResponse = this.http.get(this.baseUrl + '/houses');
    console.log(myResponse);
    return myResponse;
  }

  //method to get allCharcters
  public getAllCharcters(): any {
    let myResponse = this.http.get(this.baseUrl + '/characters');
    console.log(myResponse);
    return myResponse;
  }
  //method to get single book view

  public getSingleBookView(id): any {
    let myResponse = this.http.get(`https://anapioficeandfire.com/api/books/${id}` );
    
     console.log(myResponse);
     return myResponse;
    
   }

   //method to get singleHouseView
   public getSingleHouseView (id):any {
     let myResponse = this.http.get(`https://anapioficeandfire.com/api/houses/${id}`);
     console.log(myResponse);
     return myResponse;
   }
  
   //get singleCharacter view
   public getSingleCharacterView (id): any {
    let myResponse = this.http.get(`https://anapioficeandfire.com/api/characters/${id}`);
    console.log(myResponse);
    return myResponse;
   }
  
} 
