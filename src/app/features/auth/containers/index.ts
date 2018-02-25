import { AuthRootComponent } from './auth-root/auth-root.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const containers = [
  AuthRootComponent,
  SignInComponent,
  SignUpComponent,
  ResetPasswordComponent,
];

export * from './auth-root/auth-root.component';
export * from './reset-password/reset-password.component';
export * from './sign-up/sign-up.component';
export * from './sign-in/sign-in.component';
