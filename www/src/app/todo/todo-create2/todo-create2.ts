import {Component, signal} from '@angular/core';
import {form, FormField, required} from '@angular/forms/signals';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';

class TodoCreateDTO {
  title: string = '';
}

@Component({
  selector: 'app-todo-create2',
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormField
  ],
  templateUrl: './todo-create2.html',
  styleUrl: './todo-create2.css',
})
export class TodoCreate2 {
  todoModel = signal<TodoCreateDTO>({
    title: ''
  })
  todoForm = form(this.todoModel, (schemaPath) => {
    required(schemaPath.title, { message: 'Titre est requis' });
    //email(schemaPath.email, { message: 'Email invalide' });
  });

}











