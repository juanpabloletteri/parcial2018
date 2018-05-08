import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PrimengModule } from './modulos/primeng/primeng.module';

import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';

const config: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'tabla',
    component: TablaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PrimengModule,
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
