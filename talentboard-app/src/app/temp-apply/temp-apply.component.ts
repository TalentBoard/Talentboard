import { Component, OnInit } from '@angular/core';
import { Applicant } from '../model/Applicant';
import { ApplicantService } from '../core/applicant.service';

@Component({
  selector: 'app-temp-apply',
  templateUrl: './temp-apply.component.html',
  styleUrls: ['./temp-apply.component.css']
})
export class TempApplyComponent implements OnInit {

  newApplicant: Applicant = new Applicant();

  constructor(public applicantService: ApplicantService) { }

  ngOnInit() {
  }

  applyToJob() {
    this.applicantService.addApplicant(this.newApplicant);
  }

}
