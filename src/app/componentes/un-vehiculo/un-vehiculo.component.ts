import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { vehiculo } from '../../clases/vehiculo'
@Component({
  selector: 'app-un-vehiculo',
  templateUrl: './un-vehiculo.component.html',
  styleUrls: ['./un-vehiculo.component.css']
})
export class UnVehiculoComponent implements OnInit {

  @Input() unVehiculo: vehiculo;

  constructor() { }

  ngOnInit() {
  }

}
