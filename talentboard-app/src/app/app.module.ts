import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './core/auth.guard';
import { UserService } from './core/user.service';
import { JobService } from './core/job.service';
import { ApplicantService } from './core/applicant.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from './core/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SuiModule, SuiDropdownModule } from 'ng2-semantic-ui';
import { ColumnComponent } from './column/column.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { DndModule } from 'ng2-dnd';

import { ToastrModule } from 'ngx-toastr';
import { JobComponent } from './job/job.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    ColumnComponent,
    ApplicantComponent,
    JobComponent,
    ApplicantListComponent,
    JobListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SuiModule,
    SuiDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    DndModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    UserService,
    JobService,
    ApplicantService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
