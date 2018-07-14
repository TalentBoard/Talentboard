import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/User';

@Injectable()
export class UserService {

  users: Observable<User[]>;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.users = db.list<User>('users').valueChanges();
  }

  getAllUsers(): Observable<User[]> {
    return this.users;
  }

  addUser(user: User) {
    if (this.getUserById(user.id) == null) {
      this.db.list<User>('users').push(user);
    } else {
      this.updateUser(user.id, user);
    }
  }

  getUserById(id: string): Observable<User> {
    return this.db.object<User>(`users/${id}`).valueChanges();
  }

  updateUser(id: string, updatedUser: User) {
    this.db.list<User>('users').set(id, updatedUser);
  }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged((value) => {
        if (value) {
          resolve(value);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  updateCurrentUser(value) {
    return new Promise((resolve, reject) => {
      const res = firebase.auth().currentUser;
      res.updateProfile({
        displayName: value.name,
        photoURL: res.photoURL
      }).then(res_ => {
        resolve();
      }, err => reject(err));
    });
  }

}
