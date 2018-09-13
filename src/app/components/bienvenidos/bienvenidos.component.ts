import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit {
  public detalle: Object = {};
  public banderac: boolean;
  public banderad: boolean;
  public id: string;
  login2: Object = {
    correo: '',
    contrasena: '',
  };
  prueba23: any;
  persona: any[] = [this.login2];
  login: Object = {
     persona: this.persona
  };
 //// POST LOGIN EXTERNO /////
  prueba2: Object = {
    id: '',
    nombre: '',
    apellidos: 'undefined',
    correo: '',
    contrasena: 'Danielcorrea#1',
    telefono: '1234',
    genero: 'masculino',
    rol: 'Usuario',
    estado: 'activo',
    token: '0001',
    adminKey: 'a'
};

  persona2: any[] = [this.prueba2];

  prueba: Object = {
  persona: this.persona2
  };

  ////////////////////////

  constructor( private _login: LoginService, private router: Router, private socialAuthService: AuthService,
     private _registro: RegistroService ) {
  // console.log(this.login);
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        this.prueba2['nombre'] = userData.name;
        this.prueba2['id'] = userData.id;
        this.prueba2['correo'] = userData.email;
        this.GuardarLoginExterno();
        this.router.navigate(['/vistaUsuario', userData.id]);
        // Now sign-in with userData
      }
    );
  }

  GuardarLoginExterno() {
    console.log(this.prueba);
    this._registro.postRegistro(this.prueba).subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

  enviar() {
    return  this._login.postLogin(this.login).subscribe(data => {
      // console.log(data.persona);
      console.log(data);
      for (const i of data.persona) {
          console.log(i.id);
          this.id = i.id;
      }
      this.detalle = data.detalle;
      if (this.detalle === 'CORREO NO REGISTRADO.') {
      this.banderac = true;
      } else if (this.detalle === 'CONTRASEÑA INCORRECTA') {
        this.banderad = true;
      } else {
        console.log('paso');
      }
      if (data != null) {
      const rol = data.persona[0].rol;
      console.log(rol);
      // this._login.user = data.persona[0];
      // console.log(this._login.user);

      if (rol === 'SuperAdmin') {
        this.router.navigate(['/vistaSuperAdmin', this.id]);
      }
      if (rol === 'Administrador') {
        this.router.navigate(['/vistaAdmin', this.id]);
      }
      if (rol === 'Usuario') {
        this.router.navigate(['/vistaUsuario', this.id]);
      }

    }
  });



}
}
