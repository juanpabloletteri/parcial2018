import { Component, OnInit } from '@angular/core';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { Http } from '@angular/http';
import { MiHttpServiceService } from '../../servicios/mi-http-service.service'

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {

  items: any;
  cols: any;

  constructor(public miHttp: Http, public nuevoHttp: MiHttpServiceService) { }

  ngOnInit() {
    this.cols = [""]

    this.nuevoHttp.httpGetP('http://localhost/apiparcial2018/traerTodosLosItems')
      //.toPromise()
      .then(data => {
        this.items = data;
        console.log(this.items)
      })

    /* this.miHttp.get('http://localhost/apiparcial2018/traerTodosLosItems')
       .toPromise()
       .then(data => {
         this.items = data.json();
         console.log(this.items)
       })*/
  }
  Borrar(id) {
alert(id)
  }
}
