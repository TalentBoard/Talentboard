import { Component, OnInit } from '@angular/core';
import { Applicant } from '../model/Applicant';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  applicants: Array<Applicant> = [
    new Applicant('Amar Jasarbasic', 'amarjasarbasic@gmail.com'),
    new Applicant('Saheed Akinbile', 'saheedakinbile@gmail.com')
  ];

  constructor() { }

  ngOnInit() {
  }

}
