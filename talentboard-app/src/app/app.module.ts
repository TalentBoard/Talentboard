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
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { JobService } from './core/job.service';
import { ApplicantService } from './core/applicant.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SuiModule, SuiDropdownModule } from 'ng2-semantic-ui';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppResolver } from './nav-bar/nav-bar.resolver';
import { ColumnComponent } from './column/column.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DndModule } from 'ng2-dnd';

import { ToastrModule } from 'ngx-toastr';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    SideNavComponent,
    ColumnComponent,
    ApplicantComponent,
    JobComponent,
  ],
  imports: [
    BrowserModule,
    SuiModule,
    SuiDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
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
    AppResolver,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
