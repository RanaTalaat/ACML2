import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';


@NgModule({
  declarations: [
    
    BookComponent
  ],
  imports: [
  
    BookRoutingModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class BookModule { }
