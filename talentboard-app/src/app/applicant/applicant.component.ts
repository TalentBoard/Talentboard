import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Applicant } from '../model/Applicant';
import { User } from '../model/User';
import { SuiModalService, ModalTemplate, TemplateModalConfig } from '../../../node_modules/ng2-semantic-ui';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  @Input() applicant: Applicant;
  assignedUser: User;

  @ViewChild('applicantModal')
  public applicantModal: ModalTemplate<{}, void, void>;

  constructor(private modalService: SuiModalService, private userService: UserService) { }

  ngOnInit() {
    this.getAssignedUser();
  }

  getAssignedUser() {
    if (this.applicant.assignedUserId !== '') {
      this.userService.getUserById(this.applicant.assignedUserId).subscribe(user => {
        console.log(user);
        this.assignedUser = user;
      });
    }
  }

  isFavourite(): boolean {
    // return this.applicant.favouritedUserIds.includes(currentUserId);
    return false;
  }

  openProfileModal() {
    const config = new TemplateModalConfig<{}, void, void>(this.applicantModal);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;

    this.modalService
      .open(config)
      .onApprove(_ => { console.log(this.applicant); })
      .onDeny(_ => { });
  }
}
