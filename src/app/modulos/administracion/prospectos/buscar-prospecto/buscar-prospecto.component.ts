import { Component, OnInit } from '@angular/core';
import { modeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-buscar-prospecto',
  templateUrl: './buscar-prospecto.component.html',
  styleUrls: ['./buscar-prospecto.component.css']
})
export class BuscarProspectoComponent implements OnInit {

  listadoRegistros: modeloProspecto[] = [];

  constructor(private prospecto: ProspectoService) { }

  ngOnInit(): void {
    this.obtenerListadoProspectos();
  }

  obtenerListadoProspectos(){
    this.prospecto.obtenerRegistros().subscribe((datos: modeloProspecto[]) => {
       this.listadoRegistros = datos;
    })

  }

}
