import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { negateLoggedUserGuard } from './guards/negate-logged-user.guard';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard.guard';

export const routes: Routes = [
  { path: 'auth/login', component: LoginComponent, canActivate: [negateLoggedUserGuard] },
  { path: 'app-home', component: HomeComponent, canActivate: [AuthGuard] }
];
