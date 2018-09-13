import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionesSuperAService {
  ROLURL = 'http://localhost:8090/personas/listar/rol';
  EliminarURL = 'http://localhost:8090/personas/eliminar/id';
  EditarURL = 'http://localhost:8090/personas/editar';
  NegociosURL = 'http://localhost:8091/negocios/listar';
  OfertasURL = 'http://localhost:8095/ofertas/listar';


  constructor(private http: Http) { }

  getXRol(rol: any) {
    const body = JSON.stringify( rol );
    const headers = new Headers ( {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
  });
  return this.http.post( this.ROLURL, body, {headers}).pipe(map( res => {
    console.log( res.json() );
    return res.json();
  }));
  }

  getTodo() {
    return this.http.get(this.NegociosURL).pipe(map(res => res.json()));
  }

  getTodoOfertas() {
    return this.http.get(this.OfertasURL).pipe(map(res => res.json()));
  }


  borrarAdm (id: any) {
    const body = JSON.stringify( id );
    const headers = new Headers ( {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
  });
  return this.http.post( this.EliminarURL, body, {headers}).pipe(map( res => {
    console.log( res.json() );
    return res.json();
  }));
  }
  Editando(editado: any) {
    const body = JSON.stringify( editado );
    const headers = new Headers ( {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
  });
  return this.http.put( this.EditarURL, body, {headers}).pipe(map( res => {
    console.log( res.json() );
    return res.json();
  }));
  }
}
