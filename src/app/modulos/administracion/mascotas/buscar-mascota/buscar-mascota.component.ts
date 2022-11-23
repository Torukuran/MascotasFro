import { Component, OnInit } from '@angular/core';
import { modeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

  listadoRegistros: modeloMascota[] = [];

  constructor(private mascotaServicio: MascotaService) { }

  ngOnInit(): void {
    this.obtenerListadoMascotas();
  }

  obtenerListadoMascotas(){
    this.mascotaServicio.obtenerRegistros().subscribe((datos: modeloMascota[]) =>{
      this.listadoRegistros = datos;
    })
  }

}
