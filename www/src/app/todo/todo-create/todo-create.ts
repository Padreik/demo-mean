import {Component, inject, output, signal} from '@angular/core';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Todo} from '../todo';
import {TodoService} from '../todo-service';

@Component({
  selector: 'app-todo-create',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    ReactiveFormsModule,
    MatError
  ],
  templateUrl: './todo-create.html',
  styleUrl: './todo-create.css',
})
export class TodoCreate {
  todoService = inject(TodoService);
  formBuilder = inject(FormBuilder);
  todoCreateForm: FormGroup = new FormGroup({});
  todoCreateEvent = output<Todo>();
  buttonEnabled = signal(true);

  ngOnInit() {
    this.todoCreateForm = this.formBuilder.group({
      title: ['', Validators.required],
      //email: ['', [Validators.required, Validators.email]],
    });
  }

  save() {
    this.buttonEnabled.set(false);
    if (this.todoCreateForm.valid) {
      const newTodo = {
        title: this.todoCreateForm.value.title,
      };
      this.todoService.create(newTodo).subscribe({
        next: (createdTodo) => {
          this.todoCreateEvent.emit(createdTodo);
          this.buttonEnabled.set(true);
        },
        error: (error) => {
          console.error('Error creating todo:', error);
          this.buttonEnabled.set(true);
        }
      });

      this.todoCreateForm.reset();
      for (const controlName in this.todoCreateForm.controls) {
        const control = this.todoCreateForm.get(controlName);
        control?.setErrors(null);
        control?.markAsPristine();
        control?.markAsUntouched();
      }
    }
  }
}






















