import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  RegistroURL = 'http://localhost:8090/personas/registrar';
  constructor( private http: Http) {
    console.log('Hola desde el servicio.');
   }


  postRegistro ( registro: any ) {
    const body = JSON.stringify( registro );
    const headers = new Headers ( {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'

    });
    return this.http.post( this.RegistroURL,  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }
}
