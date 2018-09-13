import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angular5-social-login';
import {
  AuthService
} from 'angular5-social-login';
import { OfertasService } from '../../services/ofertas.service';
import { NegociosService } from '../../services/negocios.service';


@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {
  user: any;
  loggedIn: any;
  datosim: any[] = [];
  lat = 6.265069;
  lng = -75.567181;
  showFiller = false;
  market: any[] = [];
  Info: any[] = [];
  ofert: any[] = [];
  filtros: any[] = [];
  negociosM: any[] = [];
  fechaoferta: string;
  ofertas2: any[] = [];
  filtroOfer2 = false;
  filtroOfer1 = false;
  filtor: boolean;

  constructor( private socialAuthService: AuthService, private ofertas: OfertasService, private _negocios: NegociosService) {
    _negocios.getTodo().subscribe(data1 => {
      for (const iterator of data1.negocios) {
        const idnegocio = iterator.idnegocio;
        this.ofertas.getIDNegocio(idnegocio).subscribe(data3 => {
          let data: any[] = [];
          data = data3.ofertas;
          if (data.length !== 0) {
            this.negociosM.push(iterator);
            console.log(this.negociosM);
          }
        });
      }
    });

   }

   formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 100) {
      return Math.round(value / 1000) + '%';
    }

    return value;
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  getXId(id: string) {
    return this._negocios.getXIDNegocio(id).subscribe( data => {
      console.log(data.negocios);
      this.Info = data.negocios;

    });
  }



  cargarOfertas(idnegocio: string) {
    const fecha = new Date();
    const diaPresente = fecha.getDate();
    const mesPresente = +fecha.getMonth() + 1;
    const anoPresente = +fecha.getFullYear();

    this.ofertas.getIDNegocio(idnegocio).subscribe(data => {
        console.log(data);
        this.ofertas2 = [];

      for (const oferta of data.ofertas) {
        const tipodeof = oferta.tipodeoferta;
        console.log(tipodeof);
          this.fechaoferta = oferta.fechafinal;
          const separador = this.fechaoferta.split('-');
          const anoOferta = +separador[0];
          const mesOferta = +separador[1];
          const diaOferta = +separador[2];

          if (this.filtroOfer1 === true || this.filtroOfer2 === true) {

            if ( anoOferta > anoPresente ) {
              if (!this.ofertas2.includes(oferta)) {
                if (this.filtros.includes(oferta.tipodeoferta)) {
                  this.ofertas2.push(oferta);
                }
              }
            } else if (anoOferta === anoPresente && mesOferta > mesPresente ) {
              if (!this.ofertas2.includes(oferta)) {
                if (this.filtros.includes(oferta.tipodeoferta)) {
                  this.ofertas2.push(oferta);
                }
              }
            } else if (mesOferta === mesPresente && diaOferta >= diaPresente ) {
              if (!this.ofertas2.includes(oferta)) {
                if (this.filtros.includes(oferta.tipodeoferta)) {
                  this.ofertas2.push(oferta);
                }
              }
            }

          } else {

            if ( anoOferta > anoPresente ) {
              if (!this.ofertas2.includes(oferta)) {
                  this.ofertas2.push(oferta);
              }
            } else if (anoOferta === anoPresente && mesOferta > mesPresente ) {
              if (!this.ofertas2.includes(oferta)) {
                  this.ofertas2.push(oferta);
              }
            } else if (mesOferta === mesPresente && diaOferta >= diaPresente ) {
              if (!this.ofertas2.includes(oferta)) {
                  this.ofertas2.push(oferta);
              }
            }

          }


      }
    });
  }


  getTodo() {
   return this._negocios.getTodo().subscribe(data => {
     console.log(data.negocios);
     this.market = data.negocios;
  });
  }

  banderaNegocio() {
    if (this.filtros.length > 0) {
      this.filtor = true;

    } else {
      this.filtor = false;
    }
  }

  aplicar(negocio: string) {
    if (this.filtros.includes(negocio)) {
      const position = this.filtros.indexOf(negocio);
      this.filtros.splice(position, 1);
    } else {
      this.filtros.push(negocio);
    }
    console.log(this.filtros);
    this._negocios.getTodo().subscribe(data => {
      console.log(data);
      this.negociosM = [];
      for (const negocio1 of data.negocios) {
        const idnegocio = negocio1.idnegocio;
        const tipo = negocio1.tiponegocio;


        this.ofertas.getIDNegocio(idnegocio).subscribe(data3 => {
          // tslint:disable-next-line:no-shadowed-variable
          let data: any[];
          data = data3.ofertas;

          for (const oferta of data) {
            console.log(oferta.tipodeoferta);
            if (this.filtros.includes(tipo) && data.length !== 0) {
              if (this.filtroOfer1 === true || this.filtroOfer2 === true) {
                console.log('Estoy aqui');
                if (this.filtros.includes(oferta.tipodeoferta)) {
                  this.negociosM.push(negocio1);
                }
              } else {
                this.negociosM.push(negocio1);
              }

            }
          }

        });




      }
      if (this.filtros.length === 0) {
        this._negocios.getTodo().subscribe(data1 => {
          for (const iterator of data1.negocios) {
            const idnegocio = iterator.idnegocio;
            this.ofertas.getIDNegocio(idnegocio).subscribe(data3 => {
              // tslint:disable-next-line:no-shadowed-variable
              let data: any[];
              data = data3.ofertas;
              if (data.length !== 0) {
                this.negociosM.push(iterator);
                console.log(this.negociosM);
              }
            });
          }
        });
      }
    });
  }

  getTodoOfertasXID(id: string) {
    return this.ofertas.getIDNegocio(id).subscribe(data => {
      console.log( data );
      this.ofert = data.ofertas;
    });
  }


  signOut(): void {
    this.socialAuthService.signOut();
  }

}
