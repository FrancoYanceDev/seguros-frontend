import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AseguradosComponent } from './asegurados.component';

const routes: Routes = [
  {
    path: '',
    component: AseguradosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AseguradosRoutingModule { }
