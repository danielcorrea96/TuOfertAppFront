import { Component, OnInit } from '@angular/core';
import { NegociosService } from '../../services/negocios.service';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../services/ofertas.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-tunegocio',
  templateUrl: './tunegocio.component.html',
  styleUrls: ['./tunegocio.component.css']
})
export class TunegocioComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  idN: any;
  data: any[] = [];
  data2: any[] = [];
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
    longitud: '',
    tipodeoferta: ''
};

persona: any[] = [this.prueba2];

prueba: Object = {
  ofertas: this.persona
};

datosmodal: any[] = [];
  constructor(private _negocio: NegociosService, private activatedRoute: ActivatedRoute, private _ofertas: OfertasService,
    private afStorage: AngularFireStorage ) {
    this.activatedRoute.params.subscribe(params => {
      this.idN = params.id;
    });
    // tslint:disable-next-line:max-line-length
    this.prueba2['foto'] = 'https://firebasestorage.googleapis.com/v0/b/probandofir.appspot.com/o/rp04cgiehfe?alt=media&token=884b5dfe-f2b6-447e-b277-d5b6bc89d1d2';

    this.listarIDNegocio();
    this.listarOfertIdNego();
  }

  ngOnInit() {
  }

  enviar(id: string ) {
  return this._ofertas.getIDOferta(id).subscribe(data => {
    this.datosmodal = data.ofertas;
    console.log(data);
    for (const i of data.ofertas) {
    this.prueba2['producto'] = i.producto;
    this.prueba2['idnegocio'] = i.idnegocio;
    this.prueba2['id'] = i.id;
    this.prueba2['foto'] = i.foto;
    this.prueba2['fechainicio'] = i.fechainicio;
    this.prueba2['fechafinal'] = i.fechafinal;
    this.prueba2['valor'] = i.valor;
    this.prueba2['descuento'] = i.descuento;
    this.prueba2['detalle'] = i.detalle;
    this.prueba2['latitud'] = i.latitud;
    this.prueba2['longitud'] = i.longitud;
    this.prueba2['tipodeoferta'] = i.tipodeoferta;
    }
  });
  }
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.then(() => {
        this.ref.getDownloadURL().subscribe((url) => {
    console.log('Url: ' + url);
    this.prueba2['foto'] = url;
    });
    });
    }

  listarIDNegocio( ) {
  return this._negocio.getXIDNegocio(this.idN).subscribe(data => {
  console.log(data.negocios);
  this.data = data.negocios;
  this.prueba2['idnegocio'] = this.idN;
  for ( const i of data.negocios) {
      console.log(i.latitud);
      console.log(i.longitud);
      this.prueba2['latitud'] = i.latitud;
      this.prueba2['longitud'] = i.longitud;
  }
  });
  }


  listarOfertIdNego () {
  return this._ofertas.getIDNegocio(this.idN).subscribe(data => {
    console.log(data.ofertas);
    this.data2 = data.ofertas;
  });
  }

  borrarXId(key: string) {
  return this._ofertas.borrarOferta(key).subscribe(data => {
    console.log(data);
    this.listarOfertIdNego();
  });

  }

  guardar() {
    return this._ofertas.registroOfertas(this.prueba).subscribe(data => {
       console.log(data);
       this.listarOfertIdNego();
       this.listarIDNegocio();
      });
    }

    editarOferta(id: string) {
      console.log(id);
      this.prueba2['id'] = id;
      return this._ofertas.editaOfertas(this.prueba).subscribe(data => {
        console.log( data );
        this.listarOfertIdNego().unsubscribe();
      });
    }
}
