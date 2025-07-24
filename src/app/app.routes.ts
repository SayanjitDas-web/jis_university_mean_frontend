import { Routes } from '@angular/router';

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
];
