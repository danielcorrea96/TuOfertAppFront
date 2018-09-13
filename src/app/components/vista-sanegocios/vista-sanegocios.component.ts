import { Component, OnInit } from '@angular/core';
import { FuncionesSuperAService } from '../../services/funciones-super-a.service';
import { NegociosService } from '../../services/negocios.service';
import { OfertasService } from '../../services/ofertas.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-vista-sanegocios',
  templateUrl: './vista-sanegocios.component.html',
  styleUrls: ['./vista-sanegocios.component.css']
})
export class VistaSANegociosComponent implements OnInit {
  ref: AngularFireStorageReference;

  task: AngularFireUploadTask;

  uploadProgress: Observable<number>;
  datos: any[] = [];
  negocio: Object = {
    idadmin: '',
    idnegocio: '',
    nombreempresa: '',
    tiponegocio: '',
    nit: '',
    foto: '',
    detalle: '',
    ubicacion: '',
    correoempresa: '',
    latitud: '',
    longitud: ''
  };

  nego: any[] = [this.negocio];

  negocioo: Object = {
    negocios: this.nego
  };
  constructor(private _funciones: FuncionesSuperAService, private negocios: NegociosService, private afStorage: AngularFireStorage) {
    this.getTodo1();
  }

  getTodo1() {
    return this._funciones.getTodo().subscribe(data => {
      console.log(data);
      this.datos = data.negocios;
    });
  }

  enviar(id: string) {
    console.log(id);
  return this.negocios.getXIDNegocio(id).subscribe(data => {
    console.log(data);
  for (const i of data.negocios) {
    this.negocio['idadmin'] = i.idadmin;
    this.negocio['idnegocio'] = i.idnegocio;
    this.negocio['nombreempresa'] = i.nombreempresa;
    this.negocio['tiponegocio'] = i.tiponegocio;
    this.negocio['nit'] = i.nit;
    this.negocio['foto'] = i.foto;
    this.negocio['detalle'] = i.detalle;
    this.negocio['ubicacion'] = i.ubicacion;
    this.negocio['detalle'] = i.detalle;
    this.negocio['latitud'] = i.latitud;
    this.negocio['longitud'] = i.longitud;
    this.negocio['correoempresa'] = i.correoempresa;
  }
  });
  }

  borrarNego(key: string) {
    this.negocios.borrarNegocio(key).subscribe( respuesta => {
      delete this.datos[key];
      this.getTodo1();
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
      this.negocio['foto'] = url;
      });
      });
      }
    actualizarNegocio() {
      console.log('Si ejecuto');
      return this.negocios.putNegocio(this.negocioo).subscribe(data => {
        console.log(data);
        this.getTodo1();
      });
    }

    mandarDatos(latitud: string, longitud: string) {
      console.log('latitud:' + latitud);
      console.log('logintud:' + longitud);
      this.negocio['latitud'] = latitud;
      this.negocio['longitud'] = longitud;
    }
  ngOnInit() {
  }



}
