import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Login } from './auth/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then((c) => c.Dashboard) }
        ]
    },
    {
        path: 'login', component: Login
    },
    {
        path: '**', redirectTo: ''
    }
];
