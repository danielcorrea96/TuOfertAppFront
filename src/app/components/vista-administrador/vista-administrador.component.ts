import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';


@Component({
  selector: 'app-vista-administrador',
  templateUrl: './vista-administrador.component.html',
  styleUrls: ['./vista-administrador.component.css']
})
export class VistaAdministradorComponent implements OnInit {
  public currentContainer: string;

  constructor() {


  }

  ngOnInit() {
  }



  switchContainer(containerName) {
    console.log('Si llama');
    switch  (containerName) {
    case '1':
    this.currentContainer =  'perfil';
    break;
    case '2':
    this.currentContainer =  'registronegocio';
    break;
    case '3':
    this.currentContainer =  'informacion';
    break;
    case '4':
    this.currentContainer =  'listarnegocio';
    break;
    default:
    this.currentContainer =  'negocios';

    }
    }

}
