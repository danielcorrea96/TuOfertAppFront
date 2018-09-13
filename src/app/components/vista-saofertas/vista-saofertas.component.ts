import { Component, OnInit } from '@angular/core';
import { FuncionesSuperAService } from '../../services/funciones-super-a.service';
import { OfertasService } from '../../services/ofertas.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-vista-saofertas',
  templateUrl: './vista-saofertas.component.html',
  styleUrls: ['./vista-saofertas.component.css']
})
export class VistaSAOfertasComponent implements OnInit {
  datos: any[] = [];
  prueba2: Object = {
    producto: '',
    idnegocio: '',
    id: '',
    foto: '',
    fechainicio: '',
    fechafinal: '',
    valor: '',
    descuento: '',
    detalle: '',
    latitud: '',
    longitud: ''
};

persona: any[] = [this.prueba2];

prueba: Object = {
  ofertas: this.persona
};
  constructor(private _funciones: FuncionesSuperAService, private _ofertas: OfertasService, private route: Router) {
    this.getOfertas();
  }

  ngOnInit() {
  }

  getOfertas() {
    return this._funciones.getTodoOfertas().subscribe(data => {
      console.log (data),
      this.datos = data.ofertas;
    });
  }

  borrarXId(key: string) {
    return this._ofertas.borrarOferta(key).subscribe(data => {
      console.log(data);
      this.getOfertas();
    });

    }

    naviga(idnegocio: string) {
    this.route.navigate(['/editarOfertas', idnegocio]);
    }


}
