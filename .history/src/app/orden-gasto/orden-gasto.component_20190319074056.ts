import { Component, OnInit } from '@angular/core';
import { Orden_Gasto } from './../models/OrdenGasto';
import { OrdenGastoSerivce } from './../services/OrdenGasto.service'

@Component({
  selector: 'app-orden-gasto',
  templateUrl: './orden-gasto.component.html',
  styleUrls: ['./orden-gasto.component.scss']
})
export class OrdenGastoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
