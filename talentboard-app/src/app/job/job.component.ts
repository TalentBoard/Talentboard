import { Component, OnInit, ViewChild } from '@angular/core';
import { Job } from '../model/Job';
import { Applicant } from '../model/Applicant';
import { ModalTemplate, TemplateModalConfig, SuiModalService } from 'ng2-semantic-ui';
import { JobService } from '../core/job.service';

export interface IContext {
  title: string;
  job: Job;
}

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  currentJob: Job = new Job();

  jobList: Array<Job> = [];
  applicantList: Array<Applicant> = [];
  applied: Array<Applicant> = [];
  phoneInterview: Array<Applicant> = [];
  personInterview: Array<Applicant> = [];
  declined: Array<Applicant> = [];
  offer: Array<Applicant> = [];
  locations = [
    'Calgary, AB',
    'Halifax, NS',
    'Montreal, QC',
    'Ottawa, ON',
    'Toronto, ON',
    'Vancouver, BC',
  ];

  @ViewChild('jobModal')
  public jobModal: ModalTemplate<IContext, void, void>;
  public newJob: Job = new Job();

  constructor(private modalService: SuiModalService, private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe(jobs => {
      this.jobList = jobs;
      if (jobs[0] !== undefined && this.currentJob.id === undefined) {
        this.currentJob = jobs[0];
      }
    });
  }

  openJobModal(title: string, job: Job) {
    const config = new TemplateModalConfig<IContext, void, void>(this.jobModal);
    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;
    config.context = { title: title, job: job };

    this.modalService
      .open(config)
      .onApprove(_ => {
        if (job.id) {
          this.jobService.updateJob(job.id, job);
        } else {
          this.jobService.addJob(this.newJob);
          this.newJob = new Job();
        }
      })
      .onDeny(_ => { });
  }

  changeCurrentJob(id: string) {
    const job = this.jobList.find((value) => {
      return value.id === id;
    });
    console.log(job);
    this.currentJob = job;
  }
}

