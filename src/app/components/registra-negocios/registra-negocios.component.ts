import { Component, OnInit } from '@angular/core';
import { NegociosService } from '../../services/negocios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registra-negocios',
  templateUrl: './registra-negocios.component.html',
  styleUrls: ['./registra-negocios.component.css']
})
export class RegistraNegociosComponent implements OnInit {
  idA: string;
  negocio: Object = {
    idadmin: '',
    idnegocio: '',
    nombreempresa: '',
    tiponegocio: '',
    nit: '',
    foto: '',
    detalle: '',
    ubicacion: '',
    correoempresa: ''
  };

  nego: any[] = [this.negocio];

  negocioo: Object = {
    negocios: this.nego
  };
  constructor(private http: NegociosService, private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe(params => {

      this.idA = params.id;
      this.negocio['idadmin'] = params.id;

    });
   }

  ngOnInit() {
  }

  guardarnegocio() {
    console.log('Si ejecuto');
    return this.http.postNegocio(this.negocioo).subscribe(data => console.log(data));
  }

}
