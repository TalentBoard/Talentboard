import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.afAuth.user.subscribe((value) => {
      console.log(value.displayName);
      console.log(value.email);
      console.log(value.photoURL);
    });
    this.router.navigate(['./app']);
  }

}

