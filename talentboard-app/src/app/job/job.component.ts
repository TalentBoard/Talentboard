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
  app1: Applicant = new Applicant();
  app2: Applicant = new Applicant();
  app3: Applicant = new Applicant();
  app4: Applicant = new Applicant();
  app5: Applicant = new Applicant();
  app6: Applicant = new Applicant();
  app7: Applicant = new Applicant();
  app8: Applicant = new Applicant();

  jobList: Array<Job> = [];
  applicantList: Array<Applicant> = [];
  applied: Array<Applicant> = [this.app1, this.app2, this.app3];
  phoneInterview: Array<Applicant> = [this.app4, this.app5];
  personInterview: Array<Applicant> = [this.app6];
  declined: Array<Applicant> = [this.app8];
  offer: Array<Applicant> = [this.app7];
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

    this.app1.name = 'John Smith';
    this.app1.currentEmployer = 'Apple';
    this.app1.currentTitle = 'Software Engineer';
    this.app2.name = 'Andrew Zhang';
    this.app2.currentEmployer = 'Google';
    this.app2.currentTitle = 'Backend Engineer';
    this.app3.name = 'Mike Smith';
    this.app3.currentEmployer = 'Uber';
    this.app3.currentTitle = 'Systems Engineer';
    this.app4.name = 'Catherine Chow';
    this.app4.currentEmployer = 'Airbnb';
    this.app4.currentTitle = 'Software Engineer';
    this.app5.name = 'Joe Smith';
    this.app5.currentEmployer = 'Microsoft';
    this.app5.currentTitle = 'Software Developer';
    this.app6.name = 'Olivia Smith';
    this.app6.currentEmployer = 'Apple';
    this.app6.currentTitle = 'Software Engineer';
    this.app7.name = 'Abdul Omar';
    this.app7.currentEmployer = 'Samsung';
    this.app7.currentTitle = 'Lead Software Engineer';
    this.app8.name = 'Jamie Ryan';
    this.app8.currentEmployer = 'Tesla';
    this.app8.currentTitle = 'Software Engineer';

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

