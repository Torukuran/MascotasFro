import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloPlan } from '../modelos/plan.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url ='http://localhost:3000';
  token: String ='';

  constructor(private http:HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.obtenerToken();
  }

  obtenerRegistros(): Observable<modeloPlan[]>{
    return this.http.get<modeloPlan[]>(`${this.url}/plans`)
  }

  obtenerRegistrosPorId(id:String): Observable<modeloPlan>{
    return this.http.get<modeloPlan>(`${this.url}/plans/${id}`);
  }

  
  crearPlan(plan: modeloPlan): Observable<modeloPlan>{
    return this.http.post<modeloPlan>(`${this.url}/plans`, plan, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  actualizarPlan(plan: modeloPlan): Observable<modeloPlan>{
    return this.http.put<modeloPlan>(`${this.url}/plans/${plan.id}`, plan, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  eliminarPlan(id: string): Observable<any>{
    return this.http.delete(`${this.url}/plans/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
