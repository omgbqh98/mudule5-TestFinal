import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private API_URL = 'http://localhost:3000/books';
  constructor(private  http: HttpClient) { }
  getAllBook(): Observable<any> {
    return this.http.get(this.API_URL);
  }
  create(book: IBook): Observable<any> {
    return this.http.post(this.API_URL, book);
  }
  finById(id: number): Observable<any> {
    return this.http.get(this.API_URL + `/${id}`);
  }
  update(book: IBook): Observable<any> {
    return this.http.put(this.API_URL + `/${book.id}`, book);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.API_URL + `/${id}`);
  }
}

