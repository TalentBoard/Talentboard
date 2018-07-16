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
      let currentUser: User;
      const fbUser = res.user;

      if (res.additionalUserInfo.isNewUser) {
        currentUser.id = fbUser.uid;
        currentUser.name = fbUser.displayName;
        currentUser.email = fbUser.email;
        currentUser.profileURL = fbUser.photoURL;
        currentUser.jobIds = [];
        this.userService.addUser(currentUser);
        localStorage.setItem('user', JSON.stringify(currentUser));
        this.router.navigate(['/app']);
      } else {
        this.userService.getUserById(fbUser.uid).subscribe(user => {
          console.log(user);
          currentUser = user;
          localStorage.setItem('user', JSON.stringify(currentUser));
          this.router.navigate(['/app']);
        });
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
