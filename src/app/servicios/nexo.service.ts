import { Injectable } from '@angular/core';
import { item } from '../clases/item';

@Injectable()
export class NexoService {

  constructor(private miItem:item) { }

  setId(id) {
    this.miItem.id = id;
  }
  setNombre(nombre) {
    this.miItem.nombre = nombre;
  }
  setCantidad(cantidad) {
    this.miItem.cantidad = cantidad;
  }
  setPrecio(precio) {
    this.miItem.precio = precio;
  }
  setDescipcion(descripcion) {
    this.miItem.descripcion = descripcion;
  }
  /////////////////////////
  getId() {
    return this.miItem.id;
  }
  getNombre() {
    return this.miItem.nombre;
  }
  getCantidad() {
    return this.miItem.cantidad;
  }
  getPrecio() {
    return this.miItem.precio;
  }
  getDescripcion() {
    return this.miItem.descripcion;
  }
}
