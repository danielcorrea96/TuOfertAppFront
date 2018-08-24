import { Component, OnInit } from '@angular/core';
import { NegociosService } from '../../services/negocios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-negocios',
  templateUrl: './listar-negocios.component.html',
  styleUrls: ['./listar-negocios.component.css']
})
export class ListarNegociosComponent implements OnInit {
  data: any[] = [];
  idA: string;
  dataidNegocio: string;



  constructor(private negocios: NegociosService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {

      this.idA = params.id;
      this.negocio['idadmin'] = params.id;

    }
  );
    this.listarTodo();
   }
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

  ngOnInit() {
  }

  listarTodo() {
  return this.negocios.getXID(this.idA).subscribe(data => {
    this.data = data.negocios;
    console.log(this.data);
    for (const i of this.data) {
        this.dataidNegocio = i.idnegocio;
        console.log(this.dataidNegocio);
        this.negocio['idnegocio'] = this.dataidNegocio;
    }
  });
  }

  borrarNego(key: string) {
  this.negocios.borrarNegocio(key).subscribe( respuesta => {
    delete this.data[key];
    this.listarTodo();
  });

  }

  actualizarNegocio() {
    console.log('Si ejecuto');
    return this.negocios.putNegocio(this.negocioo).subscribe(data => {
      console.log(data);
      this.listarTodo();
    });
  }
}
