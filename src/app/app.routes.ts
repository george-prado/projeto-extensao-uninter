import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { negateLoggedUserGuard } from './guards/negate-logged-user.guard';
import { AuthGuard } from './guards/auth.guard.guard';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BookclubComponent } from './components/bookclub/bookclub.component';
import { DonationsComponent } from './components/donations/donations.component';

export const routes: Routes = [
  { path: 'admin', component: LoginComponent, canActivate: [negateLoggedUserGuard] },
  { path: 'admin/home', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'gallery', component: GalleryComponent },
  { path: 'club', component: BookclubComponent },
  { path: 'donate', component: DonationsComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
