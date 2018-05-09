import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataTableModule,
    TableModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataTableModule,
    TableModule
  ],
  declarations: []
})
export class PrimengModule { }
