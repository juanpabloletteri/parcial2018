import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
//import { Http } from '@angular/http';
//import { MiHttpServiceService } from '../../servicios/mi-http-service.service'
import { RouterModule, Route, Routes, Router } from '@angular/router';
import swal from 'sweetalert2'
import { ServicioVehiculosService } from '../../servicios/servicio-vehiculos.service';
import { vehiculo } from '../../clases/vehiculo'

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {

  vehiculos: any;
  cols: any;
  vehiculoDelListado: vehiculo;

  constructor(private miVehiculoServicio: ServicioVehiculosService, public rute: Router) { }

  ngOnInit() {
    this.DibujarTabla()
  }

  Borrar(id) {
    var data = { id: id }
    this.miVehiculoServicio.borrarVehiculo(data)
      .then(data => {
        swal(
          'Felicidades!',
          'Vehiculo eliminado exitosamente!',
          'success'
        )
        this.vehiculos = null;
        this.DibujarTabla()
        console.log(data);
      })
    /* this.miHttp.post('http://localhost/apiparcial2018/borrarVehiculo', { id: id })
       .toPromise()
       .then(data => {
         swal(
           'Felicidades!',
           'Vehiculo eliminado exitosamente!',
           'success'
         )
         this.vehiculos = null;
         this.DibujarTabla()
         console.log(data);
       })*/
  }

  DibujarTabla() {
    this.cols = [""]

    this.miVehiculoServicio.getListado()
      .then(data => {
        console.log(data)
        this.vehiculos = data;
      })
  }

  Ver(vehiculo) {
    this.vehiculoDelListado = vehiculo;
  }
}
