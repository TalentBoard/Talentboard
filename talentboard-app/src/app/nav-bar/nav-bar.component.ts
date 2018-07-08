import { Component, OnInit } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { AfService } from '../providers/af.service';
import { User } from '../model/User';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: User = new User();

  constructor(public afService: AfService) { }

  ngOnInit() {
    this.user = this.afService.user;
  }

}
