import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angular5-social-login';
import {
  AuthService
} from 'angular5-social-login';
import { OfertasService } from '../../services/ofertas.service';


@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {
  user: any;
  loggedIn: any;
  datosim: any[] = [];

  constructor( private socialAuthService: AuthService, private ofertas: OfertasService) {
    this.getTodo();
   }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  getTodo() {
   return this.ofertas.getOfertas().subscribe(data => {
     console.log(data.ofertas);
    this.datosim = data.ofertas;
  });
  }


  signOut(): void {
    this.socialAuthService.signOut();
  }

}
