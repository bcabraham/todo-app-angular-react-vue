import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';
  @Output() todos: Todo[] = new Array();
  nextIndex = 0;

  addTodo(todoText: string) {
    const todo = new Todo(
      this.nextIndex,
      todoText,
      false
    );

    this.todos.push(todo);
    this.nextIndex++;
  }


}
