import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { User } from '../model/User';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService2 {

  constructor(private afAuth: AngularFireAuth, private userService: UserService, private router: Router) { }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res => {
      let currentUser: User = new User();
      const fbUser = res.user;

      if (res.additionalUserInfo.isNewUser) {
        currentUser.id = fbUser.uid;
        currentUser.name = fbUser.displayName;
        currentUser.email = fbUser.email;
        currentUser.profileURL = fbUser.photoURL;
        localStorage.setItem('user', JSON.stringify(currentUser));
        this.userService.createUser(currentUser);
      } else {
        this.userService.getUserById(fbUser.uid).subscribe(user => {
          console.log(user);
          currentUser = user;
          localStorage.setItem('user', JSON.stringify(currentUser));
        });
      }
    });
  }

  registerUser(email: string, password: string, user: User) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      const currentUser: User = user;
      const userId = res.user.uid;

      currentUser.id = userId;
      currentUser.profileURL = 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png';
      localStorage.setItem('user', JSON.stringify(currentUser));
      this.userService.createUser(currentUser);
    });
  }

  // emailLogin(email: string, password: string) {
  //   this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //     .then(res => {

  //     });
  // }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }
}
