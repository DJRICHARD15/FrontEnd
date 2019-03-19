import { Component, OnInit } from '@angular/core';
import { Orden_Gasto } from '../../app/models/OrdenGasto';
import { OrdenGastoService } from '../../app/services/OrdenGasto.service';

@Component({
  selector: 'app-orden-gasto',
  templateUrl: './orden-gasto.component.html',
  styleUrls: ['./orden-gasto.component.scss']
})
export class OrdenGastoComponent implements OnInit {
  ordenGasto: OrdenGasto;
  ordenGastoOne: Array<OrdenGasto>;w

  constructor( private Servicios: Or) { }

  ngOnInit() {
  }

}
