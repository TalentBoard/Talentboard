import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {JobService} from "../core/job.service";
import {Job} from "../model/Job";
import {JobFormComponent} from "../job-form/job-form.component";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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

  constructor(private router: Router,private jobService:JobService) { }

  ngOnInit() {
    var x = this.jobService.getAllJobs();
    x.snapshotChanges().subscribe(item => {
      this.jobList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        // y["$key"] = element.key;
        this.jobList.push(y as Job);
      });
    });
  }



  newJob(){
    this.router.navigate(['./addJob']);
  }

  newApplicant(){
    this.router.navigate(['./addApplicant']);
  }
  //



  selectedJobHandler(event:any){
    this.selectedJobName=event.target.value;

    var x = this.jobService.getJobByName(this.selectedJobName);
    x.snapshotChanges().subscribe(item => {
      this.selectedJobList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        // y["$key"] = element.key;
        this.selectedJobList.push(y as Job);
      });
    });
    // this.selectedJob=this.jobService.getJobByName(this.selectedJobName)

  }

  onEdit(){
    this.router.navigate(['./addJob']);
    // this.jobFormComponent.onEdit();
    this.jobService.currentJob = {
      id: null,
      title: 'sahhhhheeddd',
      location: '',
      description: '',
      salary: '',
      applicantIds:"",
      isOpen:false
    }

  }



}
