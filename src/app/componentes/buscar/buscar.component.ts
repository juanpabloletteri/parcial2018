import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicioVehiculosService } from '../../servicios/servicio-vehiculos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent implements OnInit {

  @Output() Cargado: EventEmitter<any> = new EventEmitter<any>();
  modelo: string;

  items: any = null;

  constructor(private miVehiculoServicio: ServicioVehiculosService) { }

  ngOnInit() {
  }
  buscar() {

    var data = { modelo: this.modelo }
    this.miVehiculoServicio.buscarVehiculo(data)
      .then(data => {
        console.log(data)
        this.items = data;
      })
    console.log("mande la busqueda");
    this.Cargado.emit(this.modelo);
  }

}
