import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ApplicantService} from "../core/applicant.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css'],
  providers:[ApplicantService]
})
export class ApplicantFormComponent implements OnInit {

  constructor(private toastr:ToastrService,private router:Router,private applicantService:ApplicantService) { }

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(applicantForm:NgForm){
    this.applicantService.addApplicant(applicantForm.value);
    this.resetForm(applicantForm);
    this.router.navigate(["./app"]);

  }
  resetForm(applicantForm?: NgForm) {
    if (applicantForm != null)
      applicantForm.reset();
    this.applicantService.currentApplicant = {
      id :"",
      name : "",
      email : "",
      phoneNumber :'',
      status : 'Applied',
      resumeURL : '',
      favouritedUserIds : [],
      assignedUserId : ''
    }

  }

}
