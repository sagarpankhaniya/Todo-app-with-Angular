import { Component, OnInit,Input } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos:any = [];
  constructor(private todoservice: ToDoService) {}

  ngOnInit(): void {
    
    this.todoservice.getWorks();
    this.todos = this.todoservice.Works;
    console.log(this.todos)
  }
  changeStyle(i) {
    this.todoservice.changeStyle(i);
  }
  deleteWork(i) {
    this.todoservice.deleteWork(i);
  }
}
