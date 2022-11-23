import { Component, OnInit } from '@angular/core';
import { modeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-buscar-sucursal',
  templateUrl: './buscar-sucursal.component.html',
  styleUrls: ['./buscar-sucursal.component.css']
})
export class BuscarSucursalComponent implements OnInit {

  listadoRegistros: modeloSucursal[] = [];

  constructor(private sucursal: SucursalService) { }

  ngOnInit(): void {
    this.obtenerListadoSucursales();
  }

  obtenerListadoSucursales(){
    this.sucursal.obtenerRegistros().subscribe((datos: modeloSucursal[]) => {
       this.listadoRegistros = datos;
    })

  }

}
