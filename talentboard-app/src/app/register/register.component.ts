import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user.service';
import * as firebase from 'firebase/app';
import { User } from '../model/User';
import { AuthService2 } from '../core/auth2.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User();
  password: string;

  constructor(
    public authService: AuthService2,
    private router: Router,
  ) { }

  ngOnInit() { }

  register() {
    this.authService.registerUser(this.newUser.email, this.password, this.newUser);
    this.router.navigate(['/app']);
  }
}
