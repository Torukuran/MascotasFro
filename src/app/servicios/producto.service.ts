import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloProducto } from '../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:3000';
  token: String='';

  constructor(private http:HttpClient, private seguridadServicion: SeguridadService) { 
    this.token= this.seguridadServicion.obtenerToken();
  }

  obtenerRegistros(): Observable<modeloProducto[]>{
    return this.http.get<modeloProducto[]>(`${this.url}/producto-servicios`);
  }

  obtenerRegistroPorId(id: String): Observable<modeloProducto>{
    return this.http.get<modeloProducto>(`${this.url}/producto-servicios/${id}`);
  }
  
  crearProducto(producto: modeloProducto): Observable<modeloProducto>{
    return this.http.post<modeloProducto>(`${this.url}/producto-servicios`, producto, {
      headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  })
  }

  actualizarProducto(producto: modeloProducto): Observable<modeloProducto>{
    return this.http.put<modeloProducto>(`${this.url}/producto-servicios/${producto.id}`, producto, {
      headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  })
  }

  eliminarProducto(id: String): Observable<any> {
    return this.http.delete(`${this.url}/producto-servicios/${id}`, {
      headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  })
  }
}
