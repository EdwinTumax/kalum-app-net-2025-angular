import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Login } from './auth/login/login';
import { RoleComponent } from './role/component/role-component';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'roles', loadComponent: () => import('./role/component/role-component').then((c) => c.RoleComponent)},
            {path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then((c) => c.Dashboard) }
        ]
    },
    {
        path: 'login', component: Login
    },
    {
        path: '**', redirectTo: 'dashboard'
    }
];
