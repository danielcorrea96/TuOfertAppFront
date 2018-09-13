import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  TodoURL = 'http://localhost:8095/ofertas/listar';
  registroOfertas2 = 'http://localhost:8095/ofertas/registrar';
  editarOfertas = 'http://localhost:8095/ofertas/editar';
  TIPOdeOfertaURL = 'http://localhost:8095/ofertas/listar/tipodeoferta';

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



    getIDOferta(id: string) {
      const url =  `http://localhost:8095/ofertas/listar/id/${ id }`;
      return this.http.get(url).pipe(map( res => res.json()));
    }

    getIDNegocio(id: string) {
    const url =  `http://localhost:8095/ofertas/listar/idnegocio/${ id }`;
    return this.http.get(url).pipe(map( res => res.json()));
    }

    borrarOferta(key: string) {
      const url = `http://localhost:8095/ofertas/eliminar/${ key }`;
      return this.http.delete(url).pipe(map(res => res.json()));
      }

    registroOfertas ( ofertas: any ) {
    const body = JSON.stringify( ofertas );
    const headers = new Headers ( {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    });
    return this.http.post( this.registroOfertas2,  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
    }

    editaOfertas(ofertas: any) {
      const body = JSON.stringify( ofertas );
      const headers = new Headers ( {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      });
      return this.http.put( this.editarOfertas,  body, {headers}).pipe(map( res => {
        console.log( res.json() );
        return res.json();
      }));
    }


}
