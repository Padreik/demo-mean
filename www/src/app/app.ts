import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListComponent} from './todo/todo-list-component/todo-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('www');
}
