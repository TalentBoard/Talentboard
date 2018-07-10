import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../core/user.service';
import { AccountUser } from '../model/User';

@Injectable()
export class AppResolver implements Resolve<AccountUser> {
  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<AccountUser> {

    const user = new AccountUser();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {
        if (res.providerData[0].providerId === 'password') {
          user.id = res.uid;
          user.profileImg = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
          user.email = res.email;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
        else {
          user.id = res.uid;
          user.profileImg = res.photoURL;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          user.email = res.email;
          return resolve(user);
        }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      });
    });
  }
}


