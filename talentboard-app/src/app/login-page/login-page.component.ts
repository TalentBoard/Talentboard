import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AfService } from '../providers/af.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public afAuth: AfService, public router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.loginWithGoogle();
    this.router.navigate(['./app']);
  }

}

