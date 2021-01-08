import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {IBook} from '../../ibook';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  // @ts-ignore
  book: IBook;
  // @ts-ignore
  id: number;
  // @ts-ignore
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.getById(id);
    });
  }
  // tslint:disable-next-line:typedef
  getById(id: number) {
    this.bookService.finById(id).subscribe(result => {
      this.book = result;
    });
  }
  // tslint:disable-next-line:typedef
  deleteBook() {
    this.bookService.delete(this.book.id).subscribe();
    alert('delete ok');
    this.router.navigate(['']);
  }
}
