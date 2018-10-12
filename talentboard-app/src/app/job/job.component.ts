import { Component, OnInit } from '@angular/core';
import { Job } from '../model/Job';
import { Applicant } from '../model/Applicant';
import { JobService } from '../core/job.service';
import { UserService } from '../core/user.service';
import { ApplicantService } from '../core/applicant.service';
import { User } from '../model/User';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  currentUser: User;
  currentJob: Job = new Job();

  jobList: Array<Job> = [];
  applied: Array<Applicant> = [];
  phoneInterview: Array<Applicant> = [];
  personInterview: Array<Applicant> = [];
  declined: Array<Applicant> = [];
  offer: Array<Applicant> = [];

  toggleJobModal = false;

  static containsApplicant(applicant, applicants) {
    let i;
    for (i = 0; i < applicants.length; i++) {
        if (applicants[i].id === applicant.id) {
            return true;
        }
    }
    return false;
  }

  constructor(private jobService: JobService,
    private userService: UserService,
    private applicantService: ApplicantService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if (this.currentUser.jobIds) {
      for (const jobId of this.currentUser.jobIds) {
        this.jobService.getJobById(jobId).subscribe(updatedJob => {
          this.jobList.push(updatedJob);
        });
      }
    }
    if (this.currentUser.currentJobView) {
      this.fetchAllApplicants();
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
                if (!JobComponent.containsApplicant(currentApplicant, this.applied)) {
                  this.applied.push(currentApplicant);
                }
                break;
              case ('Phone Interview'):
                if (!JobComponent.containsApplicant(currentApplicant, this.phoneInterview)) {
                  this.phoneInterview.push(currentApplicant);
                }
                break;
              case ('In Person Interview'):
                if (!JobComponent.containsApplicant(currentApplicant, this.personInterview)) {
                  this.personInterview.push(currentApplicant);
                }
                break;
              case ('Declined'):
                if (!JobComponent.containsApplicant(currentApplicant, this.declined)) {
                  this.declined.push(currentApplicant);
                }
                break;
              case ('Sent Offer'):
                if (!JobComponent.containsApplicant(currentApplicant, this.offer)) {
                  this.offer.push(currentApplicant);
                }
                break;
            }
          });
        }
      }
    });
  }

  clearAllApplicants() {
    this.applied = [];
    this.phoneInterview = [];
    this.personInterview = [];
    this.declined = [];
    this.offer = [];
  }

  clearAllJobs() {
    this.jobList = [];
  }

  changeCurrentJob(id: string) {
    const job = this.jobList.find((value) => {
      return value.id === id;
    });
    this.currentJob = job;
    this.currentUser.currentJobView = job.id;
    this.userService.updateUser(this.currentUser.id, this.currentUser);
    localStorage.setItem('user', JSON.stringify(this.currentUser));
    console.log(this.jobList);
    this.fetchAllApplicants();
  }

  getNumberOfJobs() {
    if (this.currentUser.jobIds == null) {
      return 0;
    }
    return this.currentUser.jobIds.length;
  }

}

