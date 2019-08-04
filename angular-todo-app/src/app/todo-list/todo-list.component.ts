import { Component, Input, OnChanges } from '@angular/core';

import { Todo } from '../models/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges {
  @Input() todos: Todo[];

  ngOnChanges() {
    console.log(this.todos);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => {
      return todo.id !== id;
    });
  }
}
