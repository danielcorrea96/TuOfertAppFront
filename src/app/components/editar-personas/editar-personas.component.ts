import { Component, OnInit } from '@angular/core';
import { FuncionesSuperAService } from '../../services/funciones-super-a.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css']
})
export class EditarPersonasComponent implements OnInit {
  ///////////// EDITAR ///////////////
  prueba5: Object = {
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
  adminKey: 'adminKey'
};

persona3: any[] = [this.prueba5];

prueba6: Object = {
persona: this.persona3
};
  constructor(private _funciones: FuncionesSuperAService, private activatedRoute: ActivatedRoute,  private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.prueba5['id'] = params.id;
      this.prueba5['token'] = params.token;
    });
  }

  ngOnInit() {
  }


  EditarT() {
    return this._funciones.Editando(this.prueba6).subscribe(data => console.log(data));
  }

}
