import { Component, OnInit } from '@angular/core';
import { Orden_Gasto } from '../../app/models/OrdenGasto';
import { OrdenGastoService } from '../../app/services/OrdenGasto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orden-gasto',
  templateUrl: './orden-gasto.component.html',
  styleUrls: ['./orden-gasto.component.scss']
})
export class OrdenGastoComponent implements OnInit {

  ordenGasto: Orden_Gasto;
  ordenGastoOne: Array<Orden_Gasto>;

  constructor( private Servicios: OrdenGastoService, private http: HttpClient) { }

  ngOnInit() {
    this.get();
    this.ordenGasto = new ordenGasto();
  }

  get() {
    this.Servicios.get('ordenGasto').subscribe(
      response => {
        this.ordenGastoOne = response as Array<Orden_Gasto>;
      },
      error => {
        console.log(error);
      }
    );
  }

}
