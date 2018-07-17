import { Component, OnInit } from '@angular/core';
import { Job } from '../model/Job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Array<Job> = [
      //  new Job('Software Engineer', false),
      //  new Job('Design Engineer', true),
      //  new Job('HR Manager', true),
      //  new Job('Financial Analyst', false),
      //  new Job('QA Engineer', true),
      //  new Job('Verification Engineer', true),
      //  new Job('Graphics Designer', false)
  ];

  constructor() { }

  ngOnInit() {
  }

}
