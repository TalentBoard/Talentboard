import { Component, OnInit, ViewChild } from '@angular/core';
import {JobService} from '../core/job.service';
import {Job} from '../model/Job';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
  data: string;
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

  locations = [
    'Toronto, ON',
    'Ottawa, ON',
    'Vancouver, BC',
    'Montreal, QC',
    'Halifax, NS',
    'Calgary, AB'
  ];

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>;

  constructor(public modalService: SuiModalService) { }

  ngOnInit() { }

  open() {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = 'closed!';
    config.isClosable = false;
    config.size = 'small';
    config.transitionDuration = 300;

    this.modalService
      .open(config)
      .onApprove(result => { console.log(result); })
      .onDeny(result => { console.log(result); });
  }
}
