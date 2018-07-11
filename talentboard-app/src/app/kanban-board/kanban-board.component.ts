import { Component, OnInit } from '@angular/core';
import { Applicant } from '../model/Applicant';
import {ApplicantService} from "../core/applicant.service";
import {Job} from "../model/Job";

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  //so you can get the applicants from the database and display it on the kanban board but the applicants are not accorid
  //to the jobs

  applicants: Array<Applicant> ;
  // = [
  //   new Applicant('Amar Jasarbasic', 'amarjasarbasic@gmail.com'),
  //   new Applicant('Saheed Akinbile', 'saheedakinbile@gmail.com'),
  //   new Applicant('Bob Jimbo', 'bobjimbo@gmail.com'),
  //   new Applicant('Hill Bill', 'hillbill@gmail.com'),
  //   new Applicant('Hamza Basrai', 'hamzabasrai@gmail.com'),
  // ];

  applicants2: Array<Applicant> = [
    new Applicant('Bijan Sam', 'amarjasarbasic@gmail.com'),
    new Applicant('Saheed Akinbile', 'saheedakinbile@gmail.com'),
    new Applicant('Amar Jasarbasic', 'amarjasarbasic@gmail.com'),
    new Applicant('Saheed Akinbile', 'saheedakinbile@gmail.com'),
    new Applicant('Amar Jasarbasic', 'amarjasarbasic@gmail.com'),
    new Applicant('Saheed Akinbile', 'saheedakinbile@gmail.com'),
  ];

  applicants3: Array<Applicant> = [
    new Applicant('Amar Jasarbasic', 'amarjasarbasic@gmail.com'),
    new Applicant('Saheed Akinbile', 'saheedakinbile@gmail.com'),
    new Applicant('Amar Jasarbasic', 'amarjasarbasic@gmail.com'),
    new Applicant('Saheed Akinbile', 'saheedakinbile@gmail.com'),
  ];

  constructor(private applicantService:ApplicantService) { }

  ngOnInit() {

    var x = this.applicantService.getAllApplicants();
    x.snapshotChanges().subscribe(item => {
      this.applicants = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        // y["$key"] = element.key;
        this.applicants.push(y as Applicant);
      });
    });
  }

}
