import { Component, OnInit, ViewChild } from '@angular/core';
import {JobService} from '../core/job.service';
import {Job} from '../model/Job';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';
import { Job } from '../model/Job';
import { JobService } from '../core/job.service';

export interface IContext {
  title: string;
  job: Job;
}

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.scss'],
  providers:[JobService]
})
export class JobViewComponent implements OnInit {
  jobList:Job[];
  selectedJobName:string;
  selectedJobList:Job[];

  /**************Add/Edit Job Modal**************/

  locations = [
    'Calgary, AB',
    'Halifax, NS',
    'Montreal, QC',
    'Ottawa, ON',
    'Toronto, ON',
    'Vancouver, BC',
  ];

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>;
  public newJob: Job = new Job();

  /**********************************************/

  public jobList: Job[];
  public currentJob: Job = new Job();

  constructor(public modalService: SuiModalService, public jobService: JobService) {
    this.jobService.getAllJobs().subscribe(jobList => {
      this.jobList = jobList;
      this.currentJob = this.jobList[0];
    });
  }

  ngOnInit() { }

  openJobModal(title: string, job: Job) {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.isClosable = false;
    config.size = 'small';
    config.transition = 'fade up';
    config.transitionDuration = 400;
    config.context = { title: title, job: job};

    this.modalService
      .open(config)
      .onApprove(_ => {
        this.jobService.addJob(this.newJob);
        this.newJob = new Job();
      })
      .onDeny(_ => { });
  }
}
