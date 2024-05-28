import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { negateLoggedUserGuard } from './guards/negate-logged-user.guard';

export const routes: Routes = [
  { path: 'auth/login', component: LoginComponent, canActivate: [negateLoggedUserGuard] }
];
