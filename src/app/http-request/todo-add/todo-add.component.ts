import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestService } from '../../services/rest.service'; 
// import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Input() todoData = {
    id: '',
    title: '',
    completed: ''
  }

  constructor( public restService: RestService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }

  addTodo() {
    this.restService.addTodo(this.todoData).subscribe((result) => {
      this.router.navigate(['/http-request/todo-details/'+result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
