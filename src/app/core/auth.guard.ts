import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user == null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
