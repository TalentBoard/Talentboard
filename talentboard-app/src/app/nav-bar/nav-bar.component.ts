import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../core/user.service';
import { User } from '../model/User';
import { ModalTemplate, TemplateModalConfig, SuiModalService } from 'ng2-semantic-ui';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { ApplicantService } from '../core/applicant.service';
import { Applicant } from '../model/Applicant';

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
  currentViewState: string;

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IModalContext, void, void>;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private applicantService: ApplicantService,
    public router: Router,
    public modalService: SuiModalService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.currentViewState = 'kanban';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  updateCurrentView(state) {
    this.currentViewState = state;
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

  addApplicant() {
    const applicant = new Applicant();
    applicant.name = 'John Smith';
    applicant.email = 'john.smith@gmail.com';
    applicant.status = 'Applied';
    applicant.about = `My name is John Smith, and I’m currently looking for a job in youth services.
    I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education.
    I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years.
    I consider myself a good public speaker, and I have a good sense of humor.`;
    applicant.currentEmployer = 'Google';
    applicant.currentTitle = 'Janitor';
    applicant.assignedUserId = this.currentUser.id;

    this.applicantService.addApplicant(applicant, '-LHeKp2kN5H2P5oGu9EP');
  }
}
