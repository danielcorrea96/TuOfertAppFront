import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

 /*  RegistroUsuario: Registro; */
  prueba2: Object = {
            id: '',
            nombre: '',
            apellidos: '',
            correo: '',
            contrasena: '',
            telefono: '',
            genero: '',
            rol: '',
            estado: '',
            token: '',
            adminKey: ''
  };

  persona: any[] = [this.prueba2];

  prueba: Object = {
    persona: this.persona
  };

  constructor(private _registro: RegistroService) {
    console.log(this.prueba);
    for (const i of this.persona) {
      console.log(i.nombre);
    }
  }

  ngOnInit() {
  }

  guardar() {
  return this._registro.postRegistro(this.prueba).subscribe(data => console.log(data));
  }

}
