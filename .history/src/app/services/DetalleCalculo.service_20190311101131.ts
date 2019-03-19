import { Detalle_Calculo } from '../model/DetalleCalculo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getDetalleCalculo/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdate/';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteDetalleCalculo/';
@Injectable()

export class DetalleCalculoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDestino(): Observable<Detalle_Calculo[]> {
        return this.http.get<Detalle_Calculo[]>(API_URL);
    }

    crearOActualizarDestino(detalle_Calculo: Detalle_Calculo): Observable<Detalle_Calculo[]> {
        return this.http.post<Detalle_Calculo[]>(API_URL_CREATE, detalle_Calculo);
    }

    delateDestino(detalle_Calculo: Detalle_Calculo): Observable<Detalle_Calculo[]> {
        return this.http.post<Detalle_Calculo[]>(API_URL_DELATE, detalle_Calculo);
    }
}
