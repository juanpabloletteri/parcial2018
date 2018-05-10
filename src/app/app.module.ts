import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PrimengModule } from './modulos/primeng/primeng.module';

import { RouterModule, Route, Routes } from '@angular/router';

import { MiHttpServiceService } from './servicios/mi-http-service.service';
import { ServicioVehiculosService } from './servicios/servicio-vehiculos.service'

import { vehiculo } from './clases/vehiculo';

import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoVehiculosComponent } from './componentes/listado-vehiculos/listado-vehiculos.component';
import { AltaComponent } from './componentes/alta/alta.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';

const config: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tabla',
    component: ListadoVehiculosComponent
  },
  {
    path: 'alta',
    component: AltaComponent
  }
  ,
  {
    path: 'buscar',
    component: BuscarComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    MenuComponent,
    HomeComponent,
    ListadoVehiculosComponent,
    AltaComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PrimengModule,
    RouterModule.forRoot(config)
  ],
  providers: [MiHttpServiceService, ServicioVehiculosService, vehiculo],
  bootstrap: [AppComponent]
})
export class AppModule { }
