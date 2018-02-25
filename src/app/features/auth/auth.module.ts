import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// routing
import { AuthRoutingModule } from './auth-routing.module';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // routing
    AuthRoutingModule,
  ],
  exports: [],
  providers: [],
  declarations: [
    // containers
    ...fromContainers.containers,
    // components
    ...fromComponents.components,
  ]
})
export class AuthModule { }
