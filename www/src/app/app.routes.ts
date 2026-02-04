import { Routes } from '@angular/router';
import {HomeComponent} from './home-component/home-component';
import {loggedInGuard} from './logged-in-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.routes'),
    canActivateChild: [loggedInGuard],
  },
  { path: '**', redirectTo: '' }
];
