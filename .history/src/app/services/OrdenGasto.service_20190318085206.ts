import { Orden_Gasto } from './../models/OrdenGasto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getOrdenGastos/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdate/';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteOrdenGastos/';
@Injectable()

export class OrdenGastoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDestino(): Observable<Orden_Gasto[]> {
        return this.http.get<Orden_Gasto[]>(API_URL);
    }
    crearOActualizarDestino(orden_Gasto: Orden_Gasto): Observable<Orden_Gasto[]> {
        return this.http.post<Orden_Gasto[]>(API_URL_CREATE, orden_Gasto);
    }
    delateDestino(orden_Gasto: Orden_Gasto): Observable<Orden_Gasto[]> {
        return this.http.post<Orden_Gasto[]>(API_URL_DELATE, orden_Gasto);
    }
}
