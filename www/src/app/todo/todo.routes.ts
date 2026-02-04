import {Routes} from '@angular/router';
import {TodoListComponent} from './todo-list-component/todo-list-component';
import {TodoDetail} from './todo-detail/todo-detail';
import {TodoCreate} from './todo-create/todo-create';
import {loggedInGuard} from '../logged-in-guard';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'create', component: TodoCreate },
  { path: ':id', component: TodoDetail },
  //{ path: ':id/edit', component: TodoEdit, canActivate: [isMyTodoGuard] },
  { path: '**', redirectTo: '' }
]

export default routes;
