import { Component, OnInit } from '@angular/core';
import { OrdenGasto } from '../../app/models/OrdenGasto';
import { OrdenGastoService } from '../../app/services/'

@Component({
  selector: 'app-orden-gasto',
  templateUrl: './orden-gasto.component.html',
  styleUrls: ['./orden-gasto.component.scss']
})
export class OrdenGastoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
