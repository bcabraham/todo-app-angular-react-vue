import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() todoAdded = new EventEmitter<boolean>();

  newTodoForm = new FormGroup({
    newTodo: new FormControl('')
  });

  onSubmit() {
    this.todoAdded.emit(this.newTodoForm.value.newTodo);
    this.newTodoForm.reset();
  }

}
