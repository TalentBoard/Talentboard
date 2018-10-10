import { Component, OnInit } from '@angular/core';
import { Job } from '../model/Job';
import { User } from '../model/User';
import { JobService } from '../core/job.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  currentUser: User;
  jobs: Array<Job> = [];

  constructor(private jobService: JobService, private navBarComponent: NavBarComponent) { }

  ngOnInit() {
    this.jobs = [];
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    for (const jobId of this.currentUser.jobIds) {
      this.jobService.getJobById(jobId).subscribe(job => {
        this.jobs.push(job);
      });
    }
  }

  viewJobBoard(job: Job) {
    this.currentUser.currentJobView = job.id;
    localStorage.setItem('user', JSON.stringify(this.currentUser));
    this.navBarComponent.updateCurrentView('kanban');
  }

}

