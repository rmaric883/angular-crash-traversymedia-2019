import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() {}

  onSubmit(){
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }

}
