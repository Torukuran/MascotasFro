import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path:'editar-mascota',
    component: EditarMascotaComponent
  },
  {
    path:'eliminar-mascota',
    component: EliminarMascotaComponent
  },
  {
    path:'buscar-mascota',
    component: BuscarMascotaComponent
  },
  {
    path:'buscar-plan',
    component: BuscarPlanComponent
  },
  {
    path:'crear-plan',
    component: CrearPlanComponent
  },
  {
    path:'editar-plan',
    component: EditarPlanComponent
  },
  {
    path: 'eliminar-plan',
    component: EliminarPlanComponent
  },
  {
    path: 'listar-productos',
    component: BuscarProductoComponent
  },
  {
    path: 'buscar-producto',
    component: BuscarProductoComponent
  },
  {
    path:'crear-producto',
    component: CrearProductoComponent
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent
  },
  {
    path: 'eliminar-producto',
    component: EliminarProductoComponent
  },
  {
    path:'buscar-prospecto',
    component: BuscarProspectoComponent
  },
  {
    path: 'crear-prospecto',
    component: CrearProspectoComponent
  },
  {
    path: 'editar-prospecto',
    component: EditarProspectoComponent
  },
  {
    path:'eliminar-prospecto',
    component: EliminarProspectoComponent
  },
  {
    path:'buscar-sucursal',
    component: BuscarSucursalComponent
  },
  {
    path:'crear-sucursal',
    component: CrearSucursalComponent
  },
  {
    path:'editar-sucursal',
    component: EditarSucursalComponent
  },
  {
    path: 'eliminar-sucursal',
    component: EliminarSucursalComponent
  },
  {
    path:'buscar-usuario',
    component: BuscarUsuarioComponent
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent
  },
  {
    path:'eliminar-usuario',
    component: EliminarUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
