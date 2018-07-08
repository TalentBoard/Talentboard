import { Component, OnInit } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { AfService } from '../providers/af.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  name: string;

  constructor(public afService: AfService) { }

  ngOnInit() {

  }

}
