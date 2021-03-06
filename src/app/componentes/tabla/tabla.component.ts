import { Component, OnInit } from '@angular/core';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  items: any;
  cols: any;

  constructor(public miHttp: Http) { }

  ngOnInit() {
    this.cols = [""]

    this.miHttp.get('http://localhost/apiparcial2018/traerTodosLosItems')
      .toPromise()
      .then(data => {
        this.items = data.json();
        console.log(this.items)
      })
  }

}
