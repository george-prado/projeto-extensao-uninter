import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage!: string;
  form = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('')
  }, [Validators.required]);
}
