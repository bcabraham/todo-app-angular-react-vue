import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnChanges {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<number>();


  ngOnChanges() {
    console.log(this.todo);
  }

  onDone() {
    this.todo.completed = !this.todo.completed;
    console.log(this.todo);
  }

  onDelete() {
    this.deleteTodo.emit(this.todo.id);
  }

}
