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
            {path: 'examenes', loadComponent: () => import('./examen-admision/component/examen-admision-component').then((c) => c.ExamenAdmisionComponent)},
            {path: 'examenes/:carreraId', loadComponent: () => import('./examen-admision/component/examen-admision-component').then((c) => c.ExamenAdmisionComponent)},
            {path: 'status-examen', loadComponent: () => import('./examen-admision/component/status-examen-admin').then(c => c.StatusExamenAdmin)},
            {path: 'candidate/finalice-process/:noExpediente', loadComponent: () => import('./examen-admision/component/finalice-candidate-process').then( c => c.FinaliceCandidateProcess)},
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

//http://localhost:4200/candidate/finalice-process/EXP-20240011