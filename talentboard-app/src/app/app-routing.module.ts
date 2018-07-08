import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
    {path: '', component: LoginPageComponent },
    {path: 'app', component: NavBarComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers:  []
})
export class AppRoutingModule {}
