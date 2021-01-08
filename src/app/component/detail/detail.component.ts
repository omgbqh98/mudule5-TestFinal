import { Component, OnInit } from '@angular/core';
import {IBook} from '../../ibook';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
// @ts-ignore
  book: IBook;
  constructor(
    private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
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
}
