import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


export const ROUTES: Routes = [
    { path: 'bienvenidos', component: BienvenidosComponent },
    { path: 'registrarse', component: RegistrarseComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'bienvenidos' },
    { path: '', pathMatch: 'full', redirectTo: 'bienvenidos' }
];

