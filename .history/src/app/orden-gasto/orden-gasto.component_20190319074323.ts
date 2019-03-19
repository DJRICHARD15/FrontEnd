import { Component, OnInit } from '@angular/core';
import { Orden_Gasto } from './../models/OrdenGasto';
import { OrdenGastoService } from './../services/OrdenGasto.service';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orden-gasto',
  templateUrl: './orden-gasto.component.html',
  styleUrls: ['./orden-gasto.component.scss']
})
export class OrdenGastoComponent implements OnInit {
  OrdenGastoService: any;
  OrdenGasto: any;
  

  constructor() { }

  ngOnInit() { }

}
