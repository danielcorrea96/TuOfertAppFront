import { Component, OnInit } from '@angular/core';
import { NegociosService } from '../../services/negocios.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { OfertasService } from '../../services/ofertas.service';
import { FileItem } from '../../models/file-item';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-editar-ofertas',
  templateUrl: './editar-ofertas.component.html',
  styleUrls: ['./editar-ofertas.component.css']
})
export class EditarOfertasComponent implements OnInit {
  ref: AngularFireStorageReference;

  task: AngularFireUploadTask;

  uploadProgress: Observable<number>;
  idN: string;
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
  constructor(private _negocio: NegociosService, private activatedRoute: ActivatedRoute, private _ofertas: OfertasService,
    private afStorage: AngularFireStorage ) {
    this.activatedRoute.params.subscribe(params => {
      this.idN = params.id;
    });
    this.listarIDNegocio();
    this.listarOfertIdNego();
   }

  ngOnInit() {
  }

  listarOfertIdNego () {
    return this._ofertas.getIDNegocio(this.idN).subscribe(data => {
      console.log(data.ofertas);
      this.prueba2['id'] = data.ofertas[0].id;
      this.data2 = data.ofertas;

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

    editarOferta(id: string) {
      console.log(id);
      this.prueba2['id'] = id;
      return this._ofertas.editaOfertas(this.prueba).subscribe(data => {
        console.log( data );
      });
    }

}
