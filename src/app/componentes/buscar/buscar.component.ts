import { Component, OnInit } from '@angular/core';
import { ServicioVehiculosService } from '../../servicios/servicio-vehiculos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  modelo: string;
  items: any;

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
  }
}
