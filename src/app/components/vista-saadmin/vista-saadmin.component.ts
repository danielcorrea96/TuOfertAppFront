import { Component, OnInit } from '@angular/core';
import { FuncionesSuperAService } from '../../services/funciones-super-a.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista-saadmin',
  templateUrl: './vista-saadmin.component.html',
  styleUrls: ['./vista-saadmin.component.css']
})
export class VistaSAAdminComponent implements OnInit {
  ////////// LISTAR /////////////////
  prueba2: Object = {
    id: '00',
    correo: 'ApoloXI@gmail.com',
    rol: 'Administrador',
    estado: 'activo',
    adminKey: 'adminKey'
};

persona: any[] = [this.prueba2];

prueba: Object = {
persona: this.persona
};

/////////// ELIMINAR/////////////////

prueba3: Object = {
  id: '',
  correo: 'ApoloXI@gmail.com',
  rol: 'SuperAdmin',
  estado: 'activo',
  adminKey: 'adminKey'
};

persona2: any[] = [this.prueba3];

prueba4: Object = {
persona: this.persona2
};
datos: any[] = [];



  constructor(private _funciones: FuncionesSuperAService, private router: Router) {
    this.getporRol();
  }

  ngOnInit() {
  }

  getporRol() {
  return this._funciones.getXRol(this.prueba).subscribe( data => {
    console.log(data);
    this.datos = data.persona;
  });
  }

  Admin(id: string, token: string) {
    this.router.navigate(['/editarPersonas', id, token]);
  }


  EliminarAdmin(id: string) {
    this.prueba3['id'] = id;
    return this._funciones.borrarAdm(this.prueba4).subscribe(data => {
      console.log();
      this.getporRol();
    });
  }


}
