import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user.service';
import * as firebase from 'firebase';
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
      localStorage.setItem('user', JSON.stringify(this.newUser));
      this.userService.createUser(this.newUser);
      this.router.navigate(['/app']);
    });
  }
}
