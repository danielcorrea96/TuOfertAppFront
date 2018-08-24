import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  TodoURL = 'http://localhost:8095/ofertas/listar';
  constructor(private http: Http) { }

  getOfertas ( ) {
    const headers = new Headers ( {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    });
    return this.http.get( this.TodoURL, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }
}
