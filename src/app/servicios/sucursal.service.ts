import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloSucursal } from '../modelos/sucursal.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  url ='http://localhost:3000';
  token: String ='';

  constructor(private http:HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.obtenerToken();
  }

  obtenerRegistros(): Observable<modeloSucursal[]>{
    return this.http.get<modeloSucursal[]>(`${this.url}/sucursals`)
  }

  obtenerRegistrosPorId(id:String): Observable<modeloSucursal>{
    return this.http.get<modeloSucursal>(`${this.url}/sucursals/${id}`);
  }

  
  crearSucursal(sucursal: modeloSucursal): Observable<modeloSucursal>{
    return this.http.post<modeloSucursal>(`${this.url}/sucursals`, sucursal, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  actualizarSucursal(sucursal: modeloSucursal): Observable<modeloSucursal>{
    return this.http.put<modeloSucursal>(`${this.url}/sucursals/${sucursal.id}`, sucursal, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  eliminarSucursal(id: string): Observable<any>{
    return this.http.delete(`${this.url}/sucursals/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
