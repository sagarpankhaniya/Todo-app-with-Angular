import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  Works = [];
  todo: '';
  constructor() {}
  addWork(todo) {
    
    this.Works.push(todo);
    localStorage.setItem('todo', JSON.stringify(this.Works));
  }
  deleteWork(i) {
    this.Works.splice(i, 1);
    localStorage.setItem('todo', JSON.stringify(this.Works));
  }
  changeStyle(i) {
    this.Works[i].isDone = !this.Works[i].isDone;
    localStorage.setItem('todo', JSON.stringify(this.Works));
    
  }
  getWorks() {
    if (localStorage.getItem('todo')) {
      this.Works = JSON.parse(localStorage.getItem('todo'));
    }
  }
}
