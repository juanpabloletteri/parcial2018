import { Component, OnInit } from '@angular/core';
import { vehiculo } from '../../clases/vehiculo';
import { MiHttpServiceService } from '../../servicios/mi-http-service.service'
import swal from 'sweetalert2'
@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  constructor(public mivehiculo: vehiculo, public miHttp: MiHttpServiceService) { }

  ngOnInit() {
    this.mivehiculo.tipo = 'auto';
  }
  Ingresar() {

    var data = {
      modelo: this.mivehiculo.modelo,
      tipo: this.mivehiculo.tipo,
      anio: this.mivehiculo.anio,
      foto: '../../../assets/generica.jpg'
    }
    this.miHttp.httpPostP('http://localhost/apiparcial2018/altaItem', data)
      .then(data => {
        console.log(data)
      })
    swal(
      'Felicidades!',
      'Vehiculo agregado exitosamente!',
      'success'
    )
  }
}
