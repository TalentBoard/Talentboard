import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './core/auth.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppResolver } from './nav-bar/nav-bar.resolver';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'app', component: NavBarComponent,  resolve: { data: AppResolver }}
];
