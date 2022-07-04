import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { AngularMaterialModule } from '../compartido/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AseguradoConsultaComponent } from './components/asegurado-consulta/asegurado-consulta.component';
import { SeguroConsultaComponent } from './components/seguro-consulta/seguro-consulta.component';
import { AseguradoService } from '../asegurados/services/asegurado.service';
import { SeguroService } from '../seguros/services/seguro.service';


@NgModule({
  declarations: [
    InicioComponent,
    AseguradoConsultaComponent,
    SeguroConsultaComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [
    AseguradoService,
    SeguroService
  ]
})
export class InicioModule { }
