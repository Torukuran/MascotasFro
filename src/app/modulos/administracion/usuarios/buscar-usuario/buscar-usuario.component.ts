import { Component, OnInit } from '@angular/core';
import { modeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

  listadoRegistros: modeloUsuario[] = [];

  constructor(private usuario: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerListadoUsuarios();
  }

  obtenerListadoUsuarios(){
    this.usuario.obtenerRegistros().subscribe((datos: modeloUsuario[]) => {
       this.listadoRegistros = datos;
    })

  }

}
