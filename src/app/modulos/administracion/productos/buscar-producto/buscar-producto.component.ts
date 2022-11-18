import { Component, OnInit } from '@angular/core';
import { modeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

listadoRegistros: modeloProducto[] = [];

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.obtenerListadoProductos();
  }

  obtenerListadoProductos(){
    this.productoServicio.obtenerRegistros().subscribe((datos: modeloProducto[]) =>{
      this.listadoRegistros = datos;
    })
  }

}
