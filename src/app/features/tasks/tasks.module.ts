import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// routing
import { TasksRoutingModule } from './tasks-routing.module';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // routing
    TasksRoutingModule,
  ],
  declarations: [
    // containers
    ...fromContainers.containers,
    // components
    ...fromComponents.components,
  ]
})
export class TasksModule { }
