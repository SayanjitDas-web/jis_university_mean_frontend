import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        loadComponent: () => {
            return import("./home/home.component").then((m)=>m.HomeComponent)
        }
    },
    {
        path:"chat",
        loadComponent: () => {
            return import("./chat/chat.component").then((m)=>m.ChatComponent)
        }
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"register",
        component: RegisterComponent
    }
];
