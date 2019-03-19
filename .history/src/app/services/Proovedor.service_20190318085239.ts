import { Proveedor } from './../models/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getProveedor/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdate/';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteProveedor/';
@Injectable()

export class ProovedorService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDestino(): Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(API_URL);
    }
    crearOActualizarDestino(proveedor: Proveedor): Observable<Proveedor[]> {
        return this.http.post<Proveedor[]>(API_URL_CREATE, proveedor);
    }
    delateDestino(proveedor: Proveedor): Observable<Proveedor[]> {
        return this.http.post<Proveedor[]>(API_URL_DELATE, proveedor);
    }
}
