import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBooksComponent} from './component/list-books/list-books.component';
import {CreateBookComponent} from './component/create-book/create-book.component';
import {UpdateBookComponent} from './component/update-book/update-book.component';
import {DeleteBookComponent} from './component/delete-book/delete-book.component';
import {DetailComponent} from './component/detail/detail.component';

const routes: Routes = [{
  path: '',
  component: ListBooksComponent
},
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'update/:id',
    component: UpdateBookComponent
  },
  {
    path: 'delete/:id',
    component: DeleteBookComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
