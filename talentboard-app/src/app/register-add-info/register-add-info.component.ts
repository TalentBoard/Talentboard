import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-register-add-info',
  templateUrl: './register-add-info.component.html',
  styleUrls: ['./register-add-info.component.scss']
})
export class RegisterAddInfoComponent {

  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      photoURL: ['', Validators.required],
      workplace: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  finalizeAccount(value) {
    this.userService.updateCurrentUser(value).then(res => {
      this.router.navigate(['/app']);
    });
  }

}
