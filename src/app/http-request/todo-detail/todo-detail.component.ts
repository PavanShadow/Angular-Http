import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RestService } from '../../services/rest.service'; 
// import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo:any;

  constructor( public restService: RestService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.restService.getTodo(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.todo = data;
    });
  }

}
