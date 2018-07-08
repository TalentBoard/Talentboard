import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { User } from '../model/User';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AfService {
  public user: User;
  constructor(public afAuth: AngularFireAuth) {
    this.user = new User;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.afAuth.user.subscribe((value) => {
      this.user.name = value.displayName;
      this.user.email = value.email;
      this.user.profileURL = value.photoURL;
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
