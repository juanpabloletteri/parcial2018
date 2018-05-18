import { Injectable } from '@angular/core';
import { vehiculo } from '../clases/vehiculo';
import { MiHttpServiceService } from '../servicios/mi-http-service.service';
@Injectable()
export class ServicioVehiculosService {

  constructor(private vehiculo: vehiculo, private miHttp: MiHttpServiceService) { }

  setId(id) {
    this.vehiculo.id = id;
  }
  setmodelo(modelo) {
    this.vehiculo.modelo = modelo;
  }
  settipo(tipo) {
    this.vehiculo.tipo = tipo;
  }
  setanio(anio) {
    this.vehiculo.anio = anio;
  }
  setfoto(foto) {
    this.vehiculo.foto = foto;
  }
  /////////////////////////
  getId() {
    return this.vehiculo.id;
  }
  getmodelo() {
    return this.vehiculo.modelo;
  }
  gettipo() {
    return this.vehiculo.tipo;
  }
  getanio() {
    return this.vehiculo.anio;
  }
  getfoto() {
    return this.vehiculo.foto;
  }
  getListado(): Promise<Array<any>> {
    return this.miHttp.httpGetP('traerTodosLosItems')
      .then(data => {
        console.log(data)
        return data;
      })
  }
}
