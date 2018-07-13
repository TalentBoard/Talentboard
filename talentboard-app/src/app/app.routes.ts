import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './core/auth.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppResolver } from './nav-bar/nav-bar.resolver';
import {JobFormComponent} from './job-form/job-form.component';
import {ApplicantFormComponent} from './applicant-form/applicant-form.component';
import { RegisterAddInfoComponent } from './register-add-info/register-add-info.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'register-addInfo', component: RegisterAddInfoComponent, resolve: { data: AppResolver}},
  { path: 'app', component: NavBarComponent,  resolve: { data: AppResolver }},
  { path: 'addJob', component: JobFormComponent},
  { path: 'addApplicant', component: ApplicantFormComponent},
];
