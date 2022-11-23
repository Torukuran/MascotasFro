import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { modeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-editar-prospecto',
  templateUrl: './editar-prospecto.component.html',
  styleUrls: ['./editar-prospecto.component.css']
})
export class EditarProspectoComponent implements OnInit {
  id:String = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['',[Validators.required]],
    'correo':['', [Validators.required]],
    'celular': ['',[Validators.required]],
    'comentario':['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProspecto: ProspectoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.buscarProspecto();
  }

  buscarProspecto(){
    this.servicioProspecto.obtenerRegistrosPorId(this.id).subscribe((datos: modeloProspecto) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["celular"].setValue(datos.celular);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["comentario"].setValue(datos.comentario);
    });

  }

  editarProspecto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    let p = new modeloProspecto();
    p.nombre = nombre;
    p.apellido = apellido;
    p.celular = celular;
    p.correo = correo;
    p.comentario = comentario;
    p.id = this.id;
    this.servicioProspecto.actualizarProspecto(p).subscribe((datos: modeloProspecto) => {
      alert("Actualizado correctamente");
      this.router.navigate(["/administracion/listar-prospectos"])
    },(error: any) => {
      alert("Error actualizando");
    })
  }
}
