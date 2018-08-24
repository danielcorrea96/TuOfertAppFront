import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

// RUTAS
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';


// SERVICIOS
import { RegistroService } from './services/registro.service';
import { LoginService } from './services/login.service';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';
import { VistaSuperAdminComponent } from './components/vista-super-admin/vista-super-admin.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistraNegociosComponent } from './components/registra-negocios/registra-negocios.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NegociosService } from './services/negocios.service';
import { ListarNegociosComponent } from './components/listar-negocios/listar-negocios.component';


// LOGIN GOOGLE //
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('321849801919930')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('919879451731-dqtmue0o2rtg7q0uh94fsh38004tnsc4.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}



@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    RegistrarseComponent,
    NavbarComponent,
    VistaUsuarioComponent,
    VistaAdministradorComponent,
    VistaSuperAdminComponent,
    PerfilComponent,
    RegistraNegociosComponent,
    InformacionComponent,
    ListarNegociosComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash:  true}),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    RegistroService,
    LoginService,
    NegociosService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
