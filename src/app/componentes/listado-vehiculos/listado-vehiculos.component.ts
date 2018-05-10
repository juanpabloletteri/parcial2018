import { Component, OnInit } from '@angular/core';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { Http } from '@angular/http';
import { MiHttpServiceService } from '../../servicios/mi-http-service.service'
import { RouterModule, Route, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {

  items: any;
  cols: any;


  constructor(public miHttp: Http, public nuevoHttp: MiHttpServiceService, public rute: Router) { }

  ngOnInit() {
    this.DibujarTabla()

    /* this.miHttp.get('http://localhost/apiparcial2018/traerTodosLosItems')
       .toPromise()
       .then(data => {
         this.items = data.json();
         console.log(this.items)
       })*/
  }
  Borrar(id) {
    this.miHttp.post('http://localhost/apiparcial2018/borrarVehiculo', { id: id })
      .toPromise()
      .then(data => {
        this.items = null;
         this.DibujarTabla()
        console.log(data);
      })
    
   

  }
  DibujarTabla() {
    this.cols = [""]

    this.nuevoHttp.httpGetP('http://localhost/apiparcial2018/traerTodosLosItems')
      //.toPromise()
      .then(data => {
        this.items = data;
        console.log(this.items)
      })
  }
}
