import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { vehiculo } from '../../clases/vehiculo';
import { ServicioVehiculosService } from '../../servicios/servicio-vehiculos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  @Input() unVehiculo: vehiculo;

  constructor(private miServicioVehiculo: ServicioVehiculosService) { }

  ngOnInit() {
  }

  Modificar() {
    this.miServicioVehiculo.modificarVehiculo(this.unVehiculo)
    .then(data=>{
      console.log(data);
    })
  }
}
