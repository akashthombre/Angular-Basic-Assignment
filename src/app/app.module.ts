import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewOneComponent } from './view-one/view-one.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { DataHttpService } from './data-http.service';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewOneComponent,

    NotFoundComponent,

    BookViewComponent,

    HouseViewComponent,

    CharacterViewComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: ViewOneComponent },
      {path: 'house/:id', component: HouseViewComponent},
      {path: 'character/:id', component: CharacterViewComponent},
      { path: 'book/:id', component: BookViewComponent },
      { path: "**", component: NotFoundComponent }



    ])
  ],
  providers: [DataHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
