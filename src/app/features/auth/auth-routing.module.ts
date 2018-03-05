import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'sign-in',
    component: fromContainers.SignInComponent,
  },
  {
    path: 'sign-up',
    component: fromContainers.SignUpComponent,
  },
  {
    path: 'reset-password',
    component: fromContainers.ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
