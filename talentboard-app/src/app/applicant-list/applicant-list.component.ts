import { Component, OnInit } from '@angular/core';
import { Applicant } from '../model/Applicant';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  constructor() { }

  applicants: Array<Applicant> = [];

  ngOnInit() {
  }

}
