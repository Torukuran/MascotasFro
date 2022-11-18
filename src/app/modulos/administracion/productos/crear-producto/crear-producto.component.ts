import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mode } from 'crypto-js';
import { modeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'tipo':['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descrpcion':['',[Validators.required]],
    'precio': ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarProducto(){
    let tipo = this.fgValidador.controls['tipo'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let descripcion = this.fgValidador.controls['descripcion'].value;
    let precio = parseInt(this.fgValidador.controls['precio'].value);
    let p= new modeloProducto();
    p.tipo= tipo;
    p.nombre = nombre;
    p.descripcion= descripcion;
    p.precio= precio;
    this.servicioProducto.crearProducto(p).subscribe((datos: modeloProducto) =>{
      alert("Producto almacenado");
      this.router.navigate(['/administracion/listar-productos'])

    },(error: any)=>{
      alert("Error almacenando producto")
    })
  }

}
