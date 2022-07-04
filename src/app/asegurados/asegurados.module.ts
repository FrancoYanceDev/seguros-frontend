import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AseguradosRoutingModule } from './asegurados-routing.module';
import { AseguradosComponent } from './asegurados.component';
import { AngularMaterialModule } from '../compartido/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AseguradoTablaComponent } from './components/asegurado-tabla/asegurado-tabla.component';
import { AseguradoCreateUpdateComponent } from './components/asegurado-create-update/asegurado-create-update.component';
import { AseguradoService } from './services/asegurado.service';
import { SeguroService } from '../seguros/services/seguro.service';


@NgModule({
  declarations: [
    AseguradosComponent,
    AseguradoTablaComponent,
    AseguradoCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    AseguradosRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule

  ], providers: [AseguradoService,SeguroService]
})
export class AseguradosModule { }
