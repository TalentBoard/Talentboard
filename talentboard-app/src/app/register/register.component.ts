import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { User } from '../model/User';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User();
  password: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() { }

  register() {
    this.authService.registerUser(this.newUser.email, this.password).then(res => {
      this.newUser.id = res.user.uid;
      this.newUser.profileURL = 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png';
      this.newUser.currentJobView = '';
      this.newUser.jobIds = [];
      localStorage.setItem('user', JSON.stringify(this.newUser));
      this.userService.createUser(this.newUser);
      this.router.navigate(['/app']);
    });
  }

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
    });
  }
}
