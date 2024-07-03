import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  statusLogin = '';

  authService = inject(AuthService);
  router = inject(Router);
  protected loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  clearStatusLogin() {
    this.statusLogin = '';
  }
  onSubmit() {
    console.log('onSubmit');
    if (this.loginForm.valid) {
      this.authService
        .login({ ...this.loginForm.value, mode: 'api' })
        .subscribe({
          next: () => {
            if (this.authService.isLoggedIn()) {
              this.router.navigate(['/user-profile']);
            }
          },
          error: () => {
            this.statusLogin = 'Usuario o contraseña incorrectos';
          },
        });
    }
  }
}
