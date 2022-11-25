import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { MisionVisionComponent } from 'src/app/plantilla/mision-vision/mision-vision.component';
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
    component: CrearMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'editar-mascota/:id',
    component: EditarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'eliminar-mascota',
    component: EliminarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'buscar-mascota',
    component: BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'listar-mascotas',
    component: BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'buscar-plan',
    component: BuscarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'listar-planes',
    component: BuscarPlanComponent
  },
  {
    path:'crear-plan',
    component: CrearPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'editar-plan/:id',
    component: EditarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-plan',
    component: EliminarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-productos',
    component: BuscarProductoComponent
  },
  {
    path: 'buscar-producto',
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'crear-producto',
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-producto',
    component: EliminarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'buscar-prospecto',
    component: BuscarProspectoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-prospecto',
    component: CrearProspectoComponent
  },
  {
    path: 'editar-prospecto/:id',
    component: EditarProspectoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'eliminar-prospecto',
    component: EliminarProspectoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'listar-sucursales',
    component: BuscarSucursalComponent
  },
  {
    path:'buscar-sucursal',
    component: BuscarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'crear-sucursal',
    component: CrearSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'editar-sucursal/:id',
    component: EditarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'listar-sucursales',
    component: BuscarPlanComponent
  },
  {
    path: 'eliminar-sucursal',
    component: EliminarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'buscar-usuario',
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,

  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'eliminar-usuario',
    component: EliminarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-usuarios',
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
