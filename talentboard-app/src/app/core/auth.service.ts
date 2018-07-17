import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  googleLogin(): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  emailLogin(email: string, password: string): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  registerUser(email: string, password: string): Promise<auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }
}
