import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { User } from '../model/User';
import { ModalTemplate, TemplateModalConfig, SuiModalService } from 'ng2-semantic-ui';
import { AuthService2 } from '../core/auth2.service';

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

  currentUser: User;

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IModalContext, void, void>;

  constructor(
    public userService: UserService,
    public authService: AuthService2,
    public modalService: SuiModalService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.currentUser);
  }

  logout() {
    this.authService.logout();
  }

  accountSettingsModal(titleModal: string, user: User) {
    const config = new TemplateModalConfig<IModalContext, void, void>(this.modalTemplate);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;
    config.context = { titleModal: titleModal, user: user };

    this.modalService
      .open(config)
      .onApprove(_ => {
        this.userService.updateUser(this.currentUser.id, this.currentUser);
      })
      .onDeny(_ => { });
  }
}
