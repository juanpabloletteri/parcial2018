import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../../clases/vehiculo';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  constructor(public mivehiculo: vehiculo) { }

  ngOnInit() {

  }
  Ingresar() {

  }
}
