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


// MAPA GOOGLE
import { AgmCoreModule } from '@agm/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';


// LOGIN GOOGLE //
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';
import { TunegocioComponent } from './components/tunegocio/tunegocio.component';
import { VistaSAAdminComponent } from './components/vista-saadmin/vista-saadmin.component';
import { VistaSAUsuarioComponent } from './components/vista-sausuario/vista-sausuario.component';
import { VistaSANegociosComponent } from './components/vista-sanegocios/vista-sanegocios.component';
import { FuncionesSuperAService } from './services/funciones-super-a.service';
import { EditarPersonasComponent } from './components/editar-personas/editar-personas.component';
import { VistaSAOfertasComponent } from './components/vista-saofertas/vista-saofertas.component';
import { EditarOfertasComponent } from './components/editar-ofertas/editar-ofertas.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NoimagePipe } from './pipes/noimage.pipe';


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
    ListarNegociosComponent,
    TunegocioComponent,
    VistaSAAdminComponent,
    VistaSAUsuarioComponent,
    VistaSANegociosComponent,
    EditarPersonasComponent,
    VistaSAOfertasComponent,
    EditarOfertasComponent,
    NoimagePipe

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash:  true}),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    MatSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
    })
  ],
  providers: [
    RegistroService,
    LoginService,
    NegociosService,
    FuncionesSuperAService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
