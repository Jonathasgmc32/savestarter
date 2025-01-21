import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        canActivate:[LoginGuardService]
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate:[LoginGuardService]
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate:[AuthGuardService]
    }
];
