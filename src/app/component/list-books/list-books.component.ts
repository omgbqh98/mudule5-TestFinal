import { Component, OnInit } from '@angular/core';
import {IBook} from '../../ibook';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  // @ts-ignore
  listBook: IBook[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  // @ts-ignore
  getAllUser(): IUser[]{
    this.bookService.getAllBook().subscribe((data) => {
      this.listBook = data;
      console.log(this.listBook);
      return this.listBook;
    });
  }
}
