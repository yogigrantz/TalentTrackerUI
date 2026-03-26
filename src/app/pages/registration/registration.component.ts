import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  model = {
    userName: '',
    password: '',
    email: ''
  };

  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post<any>(environment.apiBaseUrl + '/api/Registration', this.model)
      .subscribe({
        next: (res) => {
          this.successMessage = 'Registration successful 🎉';

          // redirect to login
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);
        },
        error: (err) => {
          this.errorMessage = err.error || 'Registration failed';
        }
      });
  }
}