import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataTableModule,
    TableModule,
    InputTextModule,
    MultiSelectModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataTableModule,
    TableModule,
    InputTextModule,
    MultiSelectModule
  ],
  declarations: []
})
export class PrimengModule { }
