import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { modeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';
  datosUsuarioEnSesion = new BehaviorSubject<modeloIdentificar>(new modeloIdentificar());

  constructor(private http: HttpClient) {
    this.verificarSesionActual();
    }

verificarSesionActual(){
  let datos = this.obtenerInformacionSesion();
  if(datos){
    this.refrescarDatosSesion(datos); 
  }
}

refrescarDatosSesion(datos: modeloIdentificar){
  this.datosUsuarioEnSesion.next(datos);
}

obtenerDatosUsuarioEnSesion(){
  return this.datosUsuarioEnSesion.asObservable();
}

identificar(usuario: string, contrasena: string): Observable<modeloIdentificar>{
  alert(usuario);
  alert(contrasena);
  return this.http.post<modeloIdentificar>(`${this.url}/identificarUsuario`,{
    usuario: usuario,
    contrasena: contrasena
  },{
    headers: new HttpHeaders({

    })
  })

}

almacenarSesion(datos: modeloIdentificar){
  datos.estaIdentificado = true;
  let stringDatos = JSON.stringify(datos);
  localStorage.setItem("datosSesion", stringDatos)
  this.refrescarDatosSesion(datos);
}

obtenerInformacionSesion(){
  let datosString = localStorage.getItem("datosSesion");
  if(datosString){
    let datos = JSON.parse(datosString);
    return datos;
  }else{
    return null;
  }
}

eliminarInformacionSesion(){
  localStorage.removeItem("datosSesion");
  this.refrescarDatosSesion(new modeloIdentificar())
}

seHaIniciadoSesion(){
  let datosString = localStorage.getItem("datosSesion");
  return datosString;
}

obtenerToken(){
  let datosString = localStorage.getItem("datosSesion");
  if(datosString){
    let datos =JSON.parse(datosString);
    return datos.tk;
  }else{
    return '';
  }
}

}
