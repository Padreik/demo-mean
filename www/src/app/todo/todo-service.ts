import {inject, Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http: HttpClient = inject(HttpClient);

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  // Utiliser un DTO au lieu d'un objet anonyme
  create(todo: {title: string}): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos', todo);
  }
}














