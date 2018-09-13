import { Component, OnInit } from '@angular/core';
import { NegociosService } from '../../services/negocios.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../../models/file-item';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-registra-negocios',
  templateUrl: './registra-negocios.component.html',
  styleUrls: ['./registra-negocios.component.css']
})
export class RegistraNegociosComponent implements OnInit {
  ref: AngularFireStorageReference;

task: AngularFireUploadTask;

uploadProgress: Observable<number>;




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
    correoempresa: '',
    latitud: '',
    longitud: ''
  };
  private carpeta_imagenes = 'img';
  nego: any[] = [this.negocio];
  latitud: string;
  longitud: string;
  negocioo: Object = {
    negocios: this.nego
  };
  archivos: FileItem[] = [];
  constructor(private http: NegociosService, private activatedRoute: ActivatedRoute, private db: AngularFirestore,
     private afStorage: AngularFireStorage ) {

    this.activatedRoute.params.subscribe(params => {

      this.idA = params.id;
      this.negocio['idadmin'] = params.id;

    });


        // tslint:disable-next-line:max-line-length
        this.negocio['foto'] = 'https://firebasestorage.googleapis.com/v0/b/probandofir.appspot.com/o/rp04cgiehfe?alt=media&token=884b5dfe-f2b6-447e-b277-d5b6bc89d1d2';

   }

  ngOnInit() {
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

  private guardarImagenes(imagen: {nombre: string; url: string}) {
    this.db.collection(`/${this.carpeta_imagenes}`).add(imagen);
  }

  cargarImagenes() {
  this.http.cargarImagenesFirebase(this.archivos);
  }

  guardarnegocio() {
    console.log('Si ejecuto');
    return this.http.postNegocio(this.negocioo).subscribe(data => console.log(data));
  }

  mandarDatos(latitud: string, longitud: string) {
    console.log('latitud:' + latitud);
    console.log('logintud:' + longitud);
    this.negocio['latitud'] = latitud;
    this.negocio['longitud'] = longitud;
  }


}
