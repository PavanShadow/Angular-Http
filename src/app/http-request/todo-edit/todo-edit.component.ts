import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestService } from '../../services/rest.service'; 
// import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  @Input() todoData: any = {
    id: '',
    title: '',
    completed: ''
  }


  constructor( public restService: RestService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.restService.getTodo(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.todoData = data;
    });
  }

  updateTodo() {
    this.restService.updateTodo(this.route.snapshot.params['id'], this.todoData).subscribe((result) => {
      this.router.navigate(['/http-request/todo-details/'+result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
