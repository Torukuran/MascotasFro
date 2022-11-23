import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { modeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-crear-prospecto',
  templateUrl: './crear-prospecto.component.html',
  styleUrls: ['./crear-prospecto.component.css']
})
export class CrearProspectoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'correo': ['',[Validators.required]],
    'celular':['', [Validators.required]],
    'comentario': ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioProspecto: ProspectoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarProspecto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let comentario = this.fgValidador.controls["comentario"].value
    let p = new modeloProspecto();
    p.nombre = nombre;
    p.apellido = apellido;
    p.correo = correo;
    p.celular = celular;
    p.comentario = comentario;
    this.servicioProspecto.crearProspecto(p).subscribe((datos: modeloProspecto) => {
      alert("Almacenado correctamente");
      this.router.navigate(["/administracion/listar-prospectos"])
    },(error: any) => {
      alert("Error almacenando");
    })
  }

}
