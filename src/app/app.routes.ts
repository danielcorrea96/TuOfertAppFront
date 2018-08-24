import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';
import { VistaSuperAdminComponent } from './components/vista-super-admin/vista-super-admin.component';


export const ROUTES: Routes = [
    { path: 'bienvenidos', component: BienvenidosComponent },
    { path: 'registrarse', component: RegistrarseComponent },
    { path: 'vistaUsuario/:id', component: VistaUsuarioComponent },
    { path: 'vistaAdmin/:id', component: VistaAdministradorComponent },
    { path: 'vistaSuperAdmin/:id', component: VistaSuperAdminComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'bienvenidos' },
    { path: '', pathMatch: 'full', redirectTo: 'bienvenidos' }
];

