import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'seguros',
    loadChildren: () => import('./seguros/seguros.module').then(m => m.SegurosModule)
  },
  {
    path: 'asegurados',
    loadChildren: () => import('./asegurados/asegurados.module').then(m => m.AseguradosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
