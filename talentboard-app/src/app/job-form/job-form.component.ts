import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {JobService} from "../core/job.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss'],
  providers:[JobService]
})
export class JobFormComponent implements OnInit {

  constructor(private jobService:JobService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(jobForm:NgForm){
    this.jobService.addJob(jobForm.value);
    this.toastr.success('Submitted Succcessfully', 'Employee Register');
    this.resetForm(jobForm);
    this.router.navigate(["./app"]);

  }
  resetForm(jobForm?: NgForm) {
    if (jobForm != null)
      jobForm.reset();
    this.jobService.currentJob = {
      id: null,
      title: '',
      location: '',
      description: '',
      salary: '',
      applicantIds:"",
      isOpen:false
    }

  }
  onEdit(){

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
