import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService2 } from '../core/auth2.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(public authService: AuthService2, private router: Router) { }

  googleLogin() {
    this.authService.googleLogin();
    // localStorage.setItem('user', 'timbo');
  }

  // tryLogin(value) {
  //   this.authService.doLogin(value)
  //     .then(res => {
  //       this.router.navigate(['/app']);
  //     }, err => {
  //       console.log(err);
  //     });
  // }

  register() {
    this.router.navigate(['/register']);
  }
}
