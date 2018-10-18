import {Component, Input, ViewChild, SimpleChanges, OnChanges} from '@angular/core';
import { Applicant } from '../model/Applicant';
import { User } from '../model/User';
import { SuiModalService, ModalTemplate, TemplateModalConfig } from '../../../node_modules/ng2-semantic-ui';
import { ApplicantService } from '../core/applicant.service';
import * as Collections from 'typescript-collections';
import {Job} from '../model/Job';

export interface IContext {
  title: string;
  applicant: Applicant;
}

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnChanges {

  @Input() name: string;
  @Input() applicants: Collections.Dictionary<String, Applicant> = new Collections.Dictionary<String, Applicant>();

  applicant: Applicant;
  currentUser: User;

  @ViewChild('applicantModal')
  public applicantModal: ModalTemplate<IContext, void, void>;
  public newApplicant: Applicant = new Applicant();

  constructor(private modalService: SuiModalService, private applicantService: ApplicantService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }


  removeItem(e: any) {
    const applicant: Applicant = e.dragData;
    this.applicants.remove(applicant.id);
    // const index = this.applicants.map((value: Applicant) => {
    //   return value.id;
    // }).indexOf(applicant.id);
    // if (index !== -1) {
    //   this.applicants.splice(index, 1);
    // }
  }

  addItem(e: any) {
    const applicant: Applicant = e.dragData;
    if (applicant.status === this.name) {
      this.applicants.setValue(applicant.id, applicant);
    } else {
      applicant.status = this.name;
      this.applicantService.updateApplicant(applicant.id, applicant);
    }
  }

  sortItems() {
    // this.applicants.sort((a: Applicant, b: Applicant) => {
    //   return a.name.localeCompare(b.name);
    // });
  }

  openAddApplicantModal(title: string, applicant: Applicant) {
    const config = new TemplateModalConfig<IContext, void, void>(this.applicantModal);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;
    config.context = { title: title, applicant: applicant };
    this.newApplicant.status = this.name;

    this.modalService
      .open(config)
      .onApprove(_ => {
        this.applicantService.addApplicant(this.newApplicant, this.currentUser.currentJobView);
        this.newApplicant = new Applicant();
      })
      .onDeny(_ => { });
  }
}
