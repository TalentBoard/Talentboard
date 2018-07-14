import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { ModalTemplate, TemplateModalConfig, SuiModalService } from 'ng2-semantic-ui';

export interface IModalContext {
  titleModal: string;
  user: User;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: User = new User();
  profileForm: FormGroup;

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IModalContext, void, void>;
  public currentUser: User = new User();

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    public modalService: SuiModalService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    });
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required]
    });
  }

  save(value) {
    this.userService.updateCurrentUser(value)
      .then(res => {
        console.log(res);
      }, err => console.log(err));
  }

  logout() {
    this.authService.doLogout()
      .then((res) => {
        window.location.href = '/';
      }, (error) => {
        console.log('Logout error', error);
      });
  }

  accountSettingsModal(titleModal: string, user: User) {
    const config = new TemplateModalConfig<IModalContext, void, void>(this.modalTemplate);
    let currentUserState = new User();
    this.userService.getCurrentUser_db().subscribe
    ( res => {
      currentUserState = res;
    });
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;
    config.context = { titleModal: titleModal, user: user };
    console.log(currentUserState);

    this.modalService
      .open(config)
      .onApprove(_ => {
        this.userService.getCurrentUser().then(res => {
          user.id = res.uid;
          user.provider = res.providerData[0].providerId;
          this.userService.getUserById(user.id).subscribe(val => user.title = val.title);
          this.userService.getUserById(user.id).subscribe(val => user.profileURL = val.profileURL);
          this.userService.getUserById(user.id).subscribe(val => user.workplace = val.workplace);
          this.userService.getUserById(user.id).subscribe(val => user.jobIds = []);
          user.email = res.email;
        }).then(res2 => {
          this.userService.updateUser(user.id, user);
          this.userService.updateCurrentUser(user);
          window.location.href = '/';
        });
      })
      .onDeny(_ => { });
  }
}
