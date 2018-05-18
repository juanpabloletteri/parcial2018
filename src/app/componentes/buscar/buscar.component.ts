import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MiHttpServiceService } from '../../servicios/mi-http-service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  modelo: string;
  items: any;

  constructor(public miHttp: Http, public nuevoHttp: MiHttpServiceService) { }

  ngOnInit() {
  }
  buscar() {
    this.miHttp.post('http://localhost/apiparcial2018/traerItemPorId', { modelo: this.modelo })
      .toPromise()
      .then(data => {

        this.items = data.json();
        console.log(this.items)
      })
  }
}
