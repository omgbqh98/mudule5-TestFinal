import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ListBooksComponent } from './component/list-books/list-books.component';
import { CreateBookComponent } from './component/create-book/create-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import { DetailComponent } from './component/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    CreateBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
