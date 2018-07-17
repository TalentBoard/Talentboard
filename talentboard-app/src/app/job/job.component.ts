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
  applied: Array<Applicant> = [
    new Applicant('Hamza', 'h@g.com'),
    new Applicant('Amar', 'h@g.com'),
    new Applicant('Saheed', 'h@g.com'),
    new Applicant('John', 'h@g.com'),
    new Applicant('John', 'h@g.com')
  ];
  interview: Array<Applicant> = [
    new Applicant('Hamza', 'h@g.com'),
    new Applicant('Amar', 'h@g.com'),
    new Applicant('Saheed', 'h@g.com'),
    new Applicant('John', 'h@g.com'),
    new Applicant('John', 'h@g.com'),
    new Applicant('Hamza', 'h@g.com')
  ];
  interview_2: Array<Applicant> = [
    new Applicant('Hamza', 'h@g.com'),
    new Applicant('Amar', 'h@g.com'),
    new Applicant('Saheed', 'h@g.com'),
    new Applicant('John', 'h@g.com'),
    new Applicant('John', 'h@g.com'),
    new Applicant('Hamza', 'h@g.com')
  ];
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

  constructor(public modalService: SuiModalService, public jobService: JobService) { }

  ngOnInit() { }

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
        }
      })
      .onDeny(_ => { });
  }
}

