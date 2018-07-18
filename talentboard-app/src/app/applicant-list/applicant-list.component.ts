import { Component, OnInit } from '@angular/core';
import { Applicant } from '../model/Applicant';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  constructor() { }

  app1: Applicant = new Applicant();
  app2: Applicant = new Applicant();
  app3: Applicant = new Applicant();
  app4: Applicant = new Applicant();
  app5: Applicant = new Applicant();
  app6: Applicant = new Applicant();
  app7: Applicant = new Applicant();
  app8: Applicant = new Applicant();

  applicants: Array<Applicant> = [this.app1, this.app2, this.app3, this.app4, this.app5, this.app6,
    this.app7, this.app8];

  ngOnInit() {
    this.app1.name = 'John Smith';
    this.app1.currentEmployer = 'Apple';
    this.app1.currentTitle = 'Software Engineer';
    this.app2.name = 'Andrew Zhang';
    this.app2.currentEmployer = 'Google';
    this.app2.currentTitle = 'Backend Engineer';
    this.app3.name = 'Mike Smith';
    this.app3.currentEmployer = 'Uber';
    this.app3.currentTitle = 'Systems Engineer';
    this.app4.name = 'Catherine Chow';
    this.app4.currentEmployer = 'Airbnb';
    this.app4.currentTitle = 'Software Engineer';
    this.app5.name = 'Joe Smith';
    this.app5.currentEmployer = 'Microsoft';
    this.app5.currentTitle = 'Software Developer';
    this.app6.name = 'Olivia Smith';
    this.app6.currentEmployer = 'Apple';
    this.app6.currentTitle = 'Software Engineer';
    this.app7.name = 'Abdul Omar';
    this.app7.currentEmployer = 'Samsung';
    this.app7.currentTitle = 'Lead Software Engineer';
    this.app8.name = 'Jamie Ryan';
    this.app8.currentEmployer = 'Tesla';
    this.app8.currentTitle = 'Software Engineer';

  }

}
