import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { User } from '../model/User';
import { UserService } from '../core/user.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';

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

  constructor(private authService: AuthService, private userService: UserService, private toastr: ToastrService, private router: Router) { }

  googleLogin() {
    this.authService.googleLogin().then(res => {
      const currentUser: User = new User();
      const fbUser = res.user;

      if (res.additionalUserInfo.isNewUser) {
        currentUser.id = fbUser.uid;
        currentUser.name = fbUser.displayName;
        currentUser.email = fbUser.email;
        currentUser.profileURL = fbUser.photoURL;
        currentUser.currentJobView = '';
        currentUser.jobIds = [];
        localStorage.setItem('user', JSON.stringify(currentUser));
        this.userService.createUser(currentUser);
        this.router.navigate(['/app']);
        location.reload();
      } else {
        this.userService.getUserById(fbUser.uid).subscribe(user => {
          if (!user.jobIds) {
            user.jobIds = []; // temp fix because firebase doesn't store empty lists
          }
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/app']);
        });
      }
    }, err => {
      this.handleError(err.code);
    });
  }

  emailLogin() {
    this.authService.emailLogin(this.credentials.email, this.credentials.password).then(res => {
      const userId = res.user.uid;
      this.userService.getUserById(userId).subscribe(user => {
        if (!user.jobIds) {
            user.jobIds = []; // temp fix because firebase doesn't store empty lists
          }
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/app']);
      });
    }, err => {
      this.handleError(err.code);
    });
  }

  handleError(errorCode: string) {
    if (this.credentials.email === '' || this.credentials.password === '') {
      this.toastr.error('Must provide both email and password', 'Error');
      return;
    }
    switch (errorCode) {
      case 'auth/invalid-email': {
        this.toastr.error('Invalid email format', 'Error');
        break;
      }
      case 'auth/user-not-found': {
        this.toastr.error('User does not exist', 'Error');
        break;
      }
      case 'auth/wrong-password': {
        this.toastr.error('Incorrect email or password', 'Error');
        break;
      }
      case 'auth/network-request-failed': {
        this.toastr.error('No network connection', 'Error');
        break;
      }
      default: {
        break;
      }
    }
  }
}
