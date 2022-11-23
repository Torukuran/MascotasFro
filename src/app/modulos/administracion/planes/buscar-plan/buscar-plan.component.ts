import { Component, OnInit } from '@angular/core';
import { modeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-buscar-plan',
  templateUrl: './buscar-plan.component.html',
  styleUrls: ['./buscar-plan.component.css']
})
export class BuscarPlanComponent implements OnInit {

  listadoRegistros: modeloPlan[] = [];

  constructor(private planServicio: PlanService) { }

  ngOnInit(): void {
    this.obtenerListadoPlanes();
  }

  obtenerListadoPlanes(){
    this.planServicio.obtenerRegistros().subscribe((datos: modeloPlan[]) =>{
      this.listadoRegistros = datos;
    })
  }

}
