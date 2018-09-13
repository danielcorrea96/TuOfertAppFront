import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';
import { VistaSuperAdminComponent } from './components/vista-super-admin/vista-super-admin.component';
import { TunegocioComponent } from './components/tunegocio/tunegocio.component';
import { VistaSAAdminComponent } from './components/vista-saadmin/vista-saadmin.component';
import { VistaSAUsuarioComponent } from './components/vista-sausuario/vista-sausuario.component';
import { VistaSANegociosComponent } from './components/vista-sanegocios/vista-sanegocios.component';
import { EditarPersonasComponent } from './components/editar-personas/editar-personas.component';
import { VistaSAOfertasComponent } from './components/vista-saofertas/vista-saofertas.component';
import { EditarOfertasComponent } from './components/editar-ofertas/editar-ofertas.component';


export const ROUTES: Routes = [
    { path: 'bienvenidos', component: BienvenidosComponent },
    { path: 'registrarse', component: RegistrarseComponent },
    { path: 'editarPersonas/:id/:token', component: EditarPersonasComponent },
    { path: 'vistaUsuario/:id', component: VistaUsuarioComponent },
    { path: 'tunegocio/:id', component: TunegocioComponent },
    { path: 'vistaAdmin/:id', component: VistaAdministradorComponent },
    { path: 'vistaSuperAdmin/:id', component: VistaSuperAdminComponent },
    { path: 'vistaSAAdmin', component: VistaSAAdminComponent },
    { path: 'vistaSAUsuario', component: VistaSAUsuarioComponent },
    { path: 'vistaSANegocios', component: VistaSANegociosComponent },
    { path: 'vistaSAOfertas', component: VistaSAOfertasComponent },
    { path: 'editarOfertas/:id', component: EditarOfertasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'bienvenidos' },
    { path: '', pathMatch: 'full', redirectTo: 'bienvenidos' }
];

