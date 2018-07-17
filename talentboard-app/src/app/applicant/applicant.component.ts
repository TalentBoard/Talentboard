import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../model/Applicant';
import { User } from '../model/User';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  @Input() applicant: Applicant;
  assignedUser: User;

  constructor(userService: UserService) { }

  ngOnInit() {
    this.assignedUser = this.getAssignedUser();
  }

  getAssignedUser(): User {
    // return user.getById(applicant.assignedUserId);
    return new User();
  }

  isFavourite(): boolean {
    // return this.applicant.favouritedUserIds.includes(currentUserId);
    return false;
  }
}
