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

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    RegistrarseComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash:  true}),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RegistroService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
