import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { modeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  id:String="";
  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'foto': ['',[Validators.required]],
    'estado':['',[Validators.required]],
    'especie': ['',[Validators.required]],
    'comentario': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.buscarMascota();
  }

  buscarMascota(){
    this.servicioMascota.obtenerRegistroPorId(this.id).subscribe((datos: modeloMascota) =>{
      this.fgValidador.controls['id'].setValue(this.id);
      this.fgValidador.controls['nombre'].setValue(datos.nombre);
      this.fgValidador.controls['foto'].setValue(datos.foto);
      this.fgValidador.controls['estado'].setValue(datos.estado);
      this.fgValidador.controls['especie'].setValue(datos.especie);
      this.fgValidador.controls['comentario'].setValue(datos.comentario);
    });
  }

  editarMascota(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let foto = this.fgValidador.controls['foto'].value;
    let estado = this.fgValidador.controls['estado'].value;
    let especie = this.fgValidador.controls['especie'].value;
    let comentario = this.fgValidador.controls['comentario'].value;

    let p= new modeloMascota();
    p.nombre = nombre;
    p.foto= foto;
    p.estado= estado;
    p.especie= especie;
    p.comentario= comentario;
    p.id=this.id;
    this.servicioMascota.actualizarMascota(p).subscribe((datos: modeloMascota) =>{
      alert("mascota actualizada");
      this.router.navigate(['/administracion/listar-mascota'])

    },(error: any)=>{
      alert("Error actualizando mascota")
    })
  }

}
