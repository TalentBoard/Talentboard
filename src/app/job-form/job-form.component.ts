import {Component, EventEmitter, Output, ViewChild, ChangeDetectorRef, OnInit} from '@angular/core';
import { Job } from '../model/Job';
import { ModalTemplate, TemplateModalConfig, SuiModalService } from 'ng2-semantic-ui';
import { JobService } from '../core/job.service';
import { UserService } from '../core/user.service';
import { User } from '../model/User';

export interface IContext {
  title: string;
  job: Job;
}

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})

export class JobFormComponent implements OnInit {

  currentUser: User;
  step = 1;
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

  @Output() toggleJobModal = new EventEmitter<void>();

  public onKeydown(event, nextView = null) {
    if (nextView == null) {
      document.getElementById('create-job' + nextView).focus();
    }
    if (event.key === 'Enter') {
      document.getElementById('input-' + nextView).focus();
    }
  }

  constructor(private modalService: SuiModalService,
              private jobService: JobService,
              private userService: UserService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    setTimeout(() => {
      this.openJobModal('Add job', this.newJob);
    });
  }

  nextStep() {
    this.step++;
  }

  backStep() {
    this.step--;

  }

  openJobModal(title: string, job: Job) {
    const config = new TemplateModalConfig<IContext, void, void>(this.jobModal);
    config.isClosable = false;
    config.size = 'large';
    config.transition = 'fade up';
    config.transitionDuration = 400;
    config.context = {title: title, job: job};

    this.modalService
      .open(config)
      .onApprove(_ => {
        if (job.id) {
          this.jobService.updateJob(job.id, job);
          localStorage.setItem('user', JSON.stringify(this.currentUser));
          location.reload();
        } else {
          this.jobService.addJob(this.newJob);
          this.currentUser.jobIds.push(job.id);
          this.currentUser.currentJobView = job.id;
          this.userService.updateUser(this.currentUser.id, this.currentUser);
          this.newJob = new Job();
          localStorage.setItem('user', JSON.stringify(this.currentUser));
          location.reload();
          this.toggleJobModal.emit();
        }
      })
      .onDeny(_ => {
        this.toggleJobModal.emit();
      });
  }
}
