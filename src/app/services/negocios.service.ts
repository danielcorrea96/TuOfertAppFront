import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NegociosService {
  negocioURL = 'http://localhost:8091/negocios/registrar';
  GetTodoURL = 'http://localhost:8091/negocios/listar';
  EliminarURL = 'http://localhost:8091/negocios/eliminar';
  PutURL = 'http://localhost:8091/negocios/editar';
  constructor(private http: Http) {
    console.log('Hola desde el servicio negocio.');
   }
  postNegocio ( negocios: any ) {
    const body = JSON.stringify( negocios );
    const headers = new Headers ( {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    });
    return this.http.post( this.negocioURL,  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }

    getXID(id: string) {
      const url = `http://localhost:8091/negocios/listar/idadmin/${ id }`;
      return this.http.get(url).pipe(map(res => res.json()));
    }

    borrarNegocio(key: string) {
    const url = `${ this.EliminarURL }/${ key }.json`;
    return this.http.delete(url).pipe(map(res => res.json()));
    }

    putNegocio(negocios: any) {
      const body = JSON.stringify( negocios );
      const headers = new Headers ( {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      });
      return this.http.put(this.PutURL, body, {headers} ).pipe(map( res => {
        console.log( res.json() );
        return res.json();
      }));
    }
}
