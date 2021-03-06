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

  ordenGasto: OrdenGasto;
  ordenGastoOne: Array<OrdenGasto>;w

  constructor( private Servicios: OrdenGastoService, private http: HttpClient) { }

  ngOnInit() {
    this.get();
    this.ordenGasto = new OrdenGasto();
  }

  get(){
    this.Servicios.get('ordenGasto')
  }

}
