import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloProspecto } from '../modelos/prospecto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  url ='http://localhost:3000';
  token: String ='';

  constructor(private http:HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.obtenerToken();
  }

  obtenerRegistros(): Observable<modeloProspecto[]>{
    return this.http.get<modeloProspecto[]>(`${this.url}/prospectos`)
  }

  obtenerRegistrosPorId(id:String): Observable<modeloProspecto>{
    return this.http.get<modeloProspecto>(`${this.url}/prospectos/${id}`);
  }

  
  crearProspecto(propecto: modeloProspecto): Observable<modeloProspecto>{
    return this.http.post<modeloProspecto>(`${this.url}/prospectos`, propecto, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  actualizarProspecto(propecto: modeloProspecto): Observable<modeloProspecto>{
    return this.http.put<modeloProspecto>(`${this.url}/prospectos/${propecto.id}`, propecto, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  eliminarProspecto(id: string): Observable<any>{
    return this.http.delete(`${this.url}/prospectos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
