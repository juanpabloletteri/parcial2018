import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MiHttpServiceService } from '../../servicios/mi-http-service.service';
import { vehiculo } from '../../clases/vehiculo'
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  modelo: string;

  constructor(public miHttp: Http, public nuevoHttp: MiHttpServiceService, public mivehiculo: vehiculo) { }

  ngOnInit() {
  }
  buscar() {
    this.miHttp.post('http://localhost/apiparcial2018/traerItemPorId', { modelo: this.modelo })
      .toPromise()
      .then(data => {
        console.log(data.json())
        this.mivehiculo = data.json();
      })
  }
}
