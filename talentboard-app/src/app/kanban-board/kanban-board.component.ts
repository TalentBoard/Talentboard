import { Component, OnInit } from '@angular/core';
import { Applicant } from '../model/Applicant';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {

  applicants: Array<Applicant> = [
    new Applicant('Amar Jasarbasic', 'amarjasarbasic@gmail.com'),
    new Applicant('Saheed Akinbile', 'saheedakinbile@gmail.com'),
    new Applicant('Bob Jimbo', 'bobjimbo@gmail.com'),
    new Applicant('Hill Bill', 'hillbill@gmail.com'),
    new Applicant('Hamza Basrai', 'hamzabasrai@gmail.com'),
  ];

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

  constructor() { }

  ngOnInit() {
  }

}
