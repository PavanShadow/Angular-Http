import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestService } from '../../services/rest.service'; 
// import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any = [];

  constructor( public restService: RestService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.todos = [];
    this.restService.getTodos().subscribe((data: {}) => {
      // console.log(data);
      this.todos = data;
    });
  }

  add() {
    this.router.navigate(['http-request/todo-add']);
  }

  delete(id) {
    this.restService.deleteTodo(id)
      .subscribe(res => {
          this.getTodos();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
