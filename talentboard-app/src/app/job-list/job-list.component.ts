import { Component, OnInit } from '@angular/core';
import { Job } from '../model/Job';
import { JobService } from '../core/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Array<Job> = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe(res => this.jobs = res);
  }

}
