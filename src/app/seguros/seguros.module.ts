import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegurosRoutingModule } from './seguros-routing.module';
import { SegurosComponent } from './seguros.component';
import { SeguroService } from './services/seguro.service';
import { AngularMaterialModule } from '../compartido/angular-material/angular-material.module';
import { SeguroTablaComponent } from './components/seguro-tabla/seguro-tabla.component';
import { SeguroCreateUpdateComponent } from './components/seguro-create-update/seguro-create-update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SegurosComponent,
    SeguroTablaComponent,
    SeguroCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    SegurosRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ], 
  providers: [
    SeguroService
  ]
})
export class SegurosModule { }
