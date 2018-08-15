import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit {
  login2: Object = {
    correo: '',
    contrasena: '',
  };

  persona: any[] = [this.login2];
  login: Object = {
     persona: this.persona
  };

  constructor( private _login: LoginService ) {
console.log(this.login);
  }

  ngOnInit() {
  }

  enviar() {
    return  this._login.postLogin(this.login).subscribe(data => {
      console.log(data);
  });

}
}
