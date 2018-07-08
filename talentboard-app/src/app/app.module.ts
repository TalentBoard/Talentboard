import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SuiModule} from 'ng2-semantic-ui';
import { JobViewComponent } from './job-view/job-view.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { CreateJobFormComponent } from './create-job-form/create-job-form.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AfService } from './providers/af.service';
import { ColumnComponent } from './column/column.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    JobViewComponent,
    KanbanBoardComponent,
    CreateJobFormComponent,
    SideNavComponent,
    LoginPageComponent,
    NavBarComponent,
    ColumnComponent,
    ApplicantComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    DndModule.forRoot()
  ],
  providers: [AfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
