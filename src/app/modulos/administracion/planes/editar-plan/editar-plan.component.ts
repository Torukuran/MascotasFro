import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { modeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {

  id:String="";
  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descrpcion':['',[Validators.required]],
    'precio': ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.buscarPlan();
  }

  buscarPlan(){
    this.servicioPlan.obtenerRegistrosPorId(this.id).subscribe((datos: modeloPlan) =>{
      this.fgValidador.controls['id'].setValue(this.id);
      this.fgValidador.controls['nombre'].setValue(datos.nombre);
      this.fgValidador.controls['descripcion'].setValue(datos.descripcion);
      this.fgValidador.controls['precio'].setValue(datos.precio);
    });
  }

  editarPlan(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let descripcion = this.fgValidador.controls['descripcion'].value;
    let precio = parseInt(this.fgValidador.controls['precio'].value);
    let p= new modeloPlan();
    p.nombre = nombre;
    p.descripcion= descripcion;
    p.precio= precio;
    p.id=this.id;
    this.servicioPlan.actualizarPlan(p).subscribe((datos: modeloPlan) =>{
      alert("Plan actualizado");
      this.router.navigate(['/administracion/listar-planes'])

    },(error: any)=>{
      alert("Error actualizando plan")
    })
  }

}
