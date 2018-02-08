import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'todos',
    component: fromContainers.TodoListComponent,
    children: [
      // @todo
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [

  ],
  declarations: [

    // containers
    ...fromContainers.containers,

    // components
    ...fromComponents.components,
  ]
})
export class TodosModule { }
