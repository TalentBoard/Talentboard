import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SuiModule} from 'ng2-semantic-ui';
import { JobViewComponent } from './job-view/job-view.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { CreateJobFormComponent } from './create-job-form/create-job-form.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JobViewComponent,
    KanbanBoardComponent,
    CreateJobFormComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
