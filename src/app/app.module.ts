import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { TodoComponent } from './http-request/todo/todo.component';
import { TodoAddComponent } from './http-request/todo-add/todo-add.component';
import { TodoDetailComponent } from './http-request/todo-detail/todo-detail.component';
import { TodoEditComponent } from './http-request/todo-edit/todo-edit.component';

const appRoutes: Routes = [
  { 
    path: 'http-request', 
    component: HttpRequestComponent,
    children: [
      { path: 'todos', component: TodoComponent },
      { path: 'todo-details/:id', component: TodoDetailComponent },
      { path: 'todo-add', component: TodoAddComponent },
      { path: 'todo-edit/:id', component: TodoEditComponent },

    ]
  
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HttpRequestComponent,
    TodoComponent,
    TodoAddComponent,
    TodoDetailComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
