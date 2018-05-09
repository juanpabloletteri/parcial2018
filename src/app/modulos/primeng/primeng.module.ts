import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataTableModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataTableModule
  ],
  declarations: []
})
export class PrimengModule { }
