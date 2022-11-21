import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {modeloUsuario} from '../modelos/usuario.modelo';
import {SeguridadService} from '../servicios/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url ='http://localhost:3000';
  token: String ='';

  constructor(private http:HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.obtenerToken();
  }

  obtenerRegistros(): Observable<modeloUsuario[]>{
    return this.http.get<modeloUsuario[]>(`${this.url}/usuarios`)
  }

  obtenerRegistrosPorId(id:String): Observable<modeloUsuario>{
    return this.http.get<modeloUsuario>(`${this.url}/usuarios/${id}`);
  }

  
  crearUsuario(usuario: modeloUsuario): Observable<modeloUsuario>{
    return this.http.post<modeloUsuario>(`${this.url}/usuarios`, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  actualizarUsuario(usuario: modeloUsuario): Observable<modeloUsuario>{
    return this.http.put<modeloUsuario>(`${this.url}/usuarios/${usuario.id}`, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  eliminarUsuario(id: string): Observable<any>{
    return this.http.delete(`${this.url}/usuarios/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
