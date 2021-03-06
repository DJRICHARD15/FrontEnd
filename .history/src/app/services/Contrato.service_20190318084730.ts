import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Contrato } from './../';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getContrato/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdate/';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteContarto/';
@Injectable()

export class ContratoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDestino(): Observable<Contrato[]> {
        return this.http.get<Contrato[]>(API_URL);
    }

    crearOActualizarDestino(contrato: Contrato): Observable<Contrato[]> {
        return this.http.post<Contrato[]>(API_URL_CREATE, contrato);
    }
    delateDestino(contrato: Contrato): Observable<Contrato[]> {
        return this.http.post<Contrato[]>(API_URL_DELATE, contrato);
    }
}
