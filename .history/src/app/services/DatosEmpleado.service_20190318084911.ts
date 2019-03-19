import { DatosEmpleado } from './../models/Contrato';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const API_URL = 'http://localhost:8080/gestionPagos/getDatosEmpleado/';
const API_URL_CREATE = 'http://localhost:8080/gestionPagos/saveOrUpdate/';
const API_URL_DELATE = 'http://localhost:8080/gestionPagos/deleteDatosEmpleado/';
@Injectable()

export class DatosEmpleadoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }


    buscarDestino(): Observable<DatosEmpleado[]> {
        return this.http.get<DatosEmpleado[]>(API_URL);
    }
    crearOActualizarDestino(datosEmpleado: DatosEmpleado): Observable<DatosEmpleado[]> {
        return this.http.post<DatosEmpleado[]>(API_URL_CREATE, datosEmpleado);
    }
    delateDestino(datosEmpleado: DatosEmpleado): Observable<DatosEmpleado[]> {
        return this.http.post<DatosEmpleado[]>(API_URL_DELATE, datosEmpleado);
    }
}
