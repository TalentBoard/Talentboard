import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { User } from '../model/User';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  googleLogin() {
    this.authService.googleLogin().then(res => {
      const currentUser: User = new User();
      const fbUser = res.user;

      if (res.additionalUserInfo.isNewUser) {
        currentUser.id = fbUser.uid;
        currentUser.name = fbUser.displayName;
        currentUser.email = fbUser.email;
        currentUser.profileURL = fbUser.photoURL;
        localStorage.setItem('user', JSON.stringify(currentUser));
        this.userService.createUser(currentUser);
        this.router.navigate(['/app']);
      } else {
        this.userService.getUserById(fbUser.uid).subscribe(user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/app']);
        });
      }
    });
  }

  emailLogin() {
    this.authService.emailLogin(this.credentials.email, this.credentials.password).then(res => {
      const userId = res.user.uid;
      this.userService.getUserById(userId).subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/app']);
      });
    });
  }
}
