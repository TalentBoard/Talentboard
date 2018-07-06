import { Component, OnInit, NgModule } from '@angular/core';
import { AfService } from '../providers/af.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public AfService : AfService) { }

  ngOnInit() {
  }
  login(){
    this.AfService.loginWithGoogle();
  }

}

