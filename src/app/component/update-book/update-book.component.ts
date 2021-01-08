import { Component, OnInit } from '@angular/core';
import {IBook} from '../../ibook';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
// @ts-ignore
  private id: number;
  // @ts-ignore
  private book: IBook;
  // @ts-ignore
  newFormUpdate: FormGroup;
  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.newFormUpdate = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.activatedRouter.params.subscribe(params => {
      this.id = params.id;
      this.bookService.finById(this.id).subscribe(res => {
        this.book = res;
        this.newFormUpdate.setValue({
          title: res.title,
          author: res.author,
          description: res.author
        });
      });
    });
  }
  // tslint:disable-next-line:typedef
  update() {
    if (!this.newFormUpdate.invalid) {
      this.book.title = this.newFormUpdate.value.title;
      this.book.author = this.newFormUpdate.value.author;
      this.book.description = this.newFormUpdate.value.description;
      console.log(this.book);
      this.bookService.update(this.book).toPromise().then(value => {
        console.log('update', value);
        alert('update ok');
      });
      this.router.navigate(['']);
    }
  }
}
