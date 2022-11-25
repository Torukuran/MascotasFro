import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { modeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id:String = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'cedula': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['',[Validators.required]],
    'telefono':['', [Validators.required]],
    'correo': ['',[Validators.required]],
    'rol':['', [Validators.required]],
    'contrasena': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.buscarUsuario();
  }

  buscarUsuario(){
    this.servicioUsuario.obtenerRegistrosPorId(this.id).subscribe((datos: modeloUsuario) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["cedula"].setValue(datos.cedula);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["rol"].setValue(datos.rol);
      this.fgValidador.controls["contrasena"].setValue(datos.contrasena);
    });

  }

  editarUsuario(){
    let cedula = this.fgValidador.controls["cedula"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let rol = this.fgValidador.controls["rol"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let p = new modeloUsuario();
    p.cedula= cedula;
    p.nombre = nombre;
    p.apellido = apellido;
    p.telefono = telefono;
    p.correo = correo;
    p.rol = rol;
    p.id = this.id;
    this.servicioUsuario.actualizarUsuario(p).subscribe((datos: modeloUsuario) => {
      alert("Usuario actualizado correctamente");
      this.router.navigate(["/administracion/listar-usuarios"])
    },(error: any) => {
      alert("Error actualizando el usuario");
    })
  }
}
