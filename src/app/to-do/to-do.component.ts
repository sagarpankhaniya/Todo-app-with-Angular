import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  
  todo:string = '';
  constructor(public _ToDoService : ToDoService) { }

  ngOnInit(): void {
   
  }
  addWork(){
    if(this.todo.length === 0) return;
    let todo = {
      id: this.todo.length + 1,
      todo: this.todo,
      isDone: false
    };
    this._ToDoService.addWork(todo);
    this.todo ="";
  }
}
