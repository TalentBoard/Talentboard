import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../model/Applicant';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  @Input() applicant: Applicant;

  constructor() { }

  ngOnInit() {
  }

}
