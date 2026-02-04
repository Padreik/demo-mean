import {Component, input} from '@angular/core';
import { MatListItem } from '@angular/material/list';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-detail',
  imports: [
    MatListItem
  ],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.css',
})
export class TodoDetail {
  todo = input<Todo>();
}










