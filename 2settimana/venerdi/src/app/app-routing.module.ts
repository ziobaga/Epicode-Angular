import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompletedComponent } from './pages/completed/completed.component';
import { UsersComponent } from './pages/users/users.component';
import { Page404Component } from './pages/page404/page404.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
