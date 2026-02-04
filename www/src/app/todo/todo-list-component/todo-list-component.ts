import {Component, computed, inject, signal, WritableSignal} from '@angular/core';
import {TodoService} from '../todo-service';
import {Todo} from '../todo';
import {MatList, MatListItem} from '@angular/material/list';
import {TodoDetail} from '../todo-detail/todo-detail';
import {TodoCreate} from '../todo-create/todo-create';

@Component({
  selector: 'app-todo-list-component',
  imports: [
    MatList,
    MatListItem,
    TodoDetail,
    TodoCreate
  ],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.css',
})
export class TodoListComponent {
  private todoService: TodoService = inject(TodoService);
  todoList: WritableSignal<Todo[]> = signal([]);
  todoCount = computed(() => this.todoList().length);

  constructor() {
    this.todoService.getAll().subscribe(todos => {
      this.todoList.set(todos);
    });
  }

  todoCreated(newTodo: Todo) {
    this.todoList().push(newTodo);
  }
}








