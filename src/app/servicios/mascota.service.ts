import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloMascota } from '../modelos/mascota.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url = 'http://localhost:3000';
  token: String='';

  constructor(private http:HttpClient, private seguridadServicion: SeguridadService) { 
    this.token= this.seguridadServicion.obtenerToken();
  }

  obtenerRegistros(): Observable<modeloMascota[]>{
    return this.http.get<modeloMascota[]>(`${this.url}/mascotas`);
  }

  obtenerRegistroPorId(id: String): Observable<modeloMascota>{
    return this.http.get<modeloMascota>(`${this.url}/mascotas/${id}`);
  }
  
  crearMascota(mascota: modeloMascota): Observable<modeloMascota>{
    return this.http.post<modeloMascota>(`${this.url}/mascotas`, mascota, {
      headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  })
  }

  actualizarMascota(mascota: modeloMascota): Observable<modeloMascota>{
    return this.http.put<modeloMascota>(`${this.url}/mascotas/${mascota.id}`, mascota, {
      headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  })
  }

  eliminarMascota(id: String): Observable<any> {
    return this.http.delete(`${this.url}/mascotas/${id}`, {
      headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  })
  }
}
