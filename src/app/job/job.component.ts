import {AfterContentInit, Component, OnChanges, OnInit} from '@angular/core';
import { Job } from '../model/Job';
import { Applicant } from '../model/Applicant';
import { JobService } from '../core/job.service';
import { UserService } from '../core/user.service';
import { ApplicantService } from '../core/applicant.service';
import { User } from '../model/User';
import * as Collections from 'typescript-collections';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements AfterContentInit {

  currentUser: User;
  currentJob: Job = new Job();

  jobs = new Collections.Dictionary<String, Job>();
  applied = new Collections.Dictionary<String, Applicant>();
  phoneInterview = new Collections.Dictionary<String, Applicant>();
  personInterview = new Collections.Dictionary<String, Applicant>();
  declined = new Collections.Dictionary<String, Applicant>();
  offer = new Collections.Dictionary<String, Applicant>();

  toggleJobModal = false;

  constructor(private jobService: JobService,
    private userService: UserService,
    private applicantService: ApplicantService) { }

  ngAfterContentInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));

    if (this.currentUser.jobIds) {
      this.fetchAllJobs();
    }

    if (this.currentUser.currentJobView) {
      this.fetchAllApplicants();
    }
  }

  fetchAllJobs() {
    this.clearAllJobs();
    for (const jobId of this.currentUser.jobIds) {
      this.jobService.getJobById(jobId).subscribe(updatedJob => {
        this.jobs.setValue(updatedJob.id, updatedJob);
      });
    }
  }

  fetchAllApplicants() {
    this.clearAllApplicants();
    this.jobService.getJobById(this.currentUser.currentJobView).subscribe(currentJob => {
      this.currentJob = currentJob;
      if (currentJob.applicantIds) {
        for (const applicantId of Object.values(currentJob.applicantIds)) {
          this.applicantService.getApplicantById(applicantId).subscribe(currentApplicant => {
            switch (currentApplicant.status) {
              case ('Applied'):
                this.applied.setValue(currentApplicant.id, currentApplicant);
                break;
              case ('Phone Interview'):
                this.phoneInterview.setValue(currentApplicant.id, currentApplicant);
                break;
              case ('In Person Interview'):
                this.personInterview.setValue(currentApplicant.id, currentApplicant);
                break;
              case ('Declined'):
                this.declined.setValue(currentApplicant.id, currentApplicant);
                break;
              case ('Sent Offer'):
                this.offer.setValue(currentApplicant.id, currentApplicant);
                break;
            }
          });
        }
      }
    });
  }

  clearAllApplicants() {
    this.applied = new Collections.Dictionary<String, Applicant>();
    this.phoneInterview = new Collections.Dictionary<String, Applicant>();
    this.personInterview = new Collections.Dictionary<String, Applicant>();
    this.declined = new Collections.Dictionary<String, Applicant>();
    this.offer = new Collections.Dictionary<String, Applicant>();
  }

  clearAllJobs() {
    this.jobs = new Collections.Dictionary<String, Job>();
  }

  changeCurrentJob(id: string) {
    this.currentJob = this.jobs.getValue(id);
    this.currentUser.currentJobView = id;
    this.userService.updateUser(this.currentUser.id, this.currentUser);
    localStorage.setItem('user', JSON.stringify(this.currentUser));
    this.fetchAllApplicants();
  }

  getNumberOfJobs() {
    if (this.currentUser.jobIds == null) {
      return 0;
    }
    return this.currentUser.jobIds.length;
  }

}

