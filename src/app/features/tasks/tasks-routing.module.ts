import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'tasks',
    component: fromContainers.TaskListComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
