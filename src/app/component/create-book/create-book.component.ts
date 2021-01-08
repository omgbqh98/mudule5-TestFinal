import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {IBook} from '../../ibook';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
// @ts-ignore
  newFormAdd: FormGroup;
  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newFormAdd = this.fb.group({
      title: [null],
      author: [null],
      description: [null]
    });
  }
  // tslint:disable-next-line:typedef
  create() {
    const newBook: IBook = this.newFormAdd.value;
    this.bookService.create(newBook).subscribe(() => {
      alert('them ok nha');
      this.router.navigate(['']);
    });
  }
}
