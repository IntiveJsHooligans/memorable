
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// graphQL
import { GraphQLModule } from './apollo.config';

// modules
import { AuthModule } from './features/auth/auth.module';
import { TasksModule } from './features/tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // graphQL
    GraphQLModule,

    AppRoutingModule,

    // custom
    AuthModule,
    TasksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
