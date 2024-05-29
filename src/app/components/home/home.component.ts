import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor (
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  logout (): void {
    this.localStorageService.setToken('');
    this.router.navigate(['auth/login']);
  }
}
