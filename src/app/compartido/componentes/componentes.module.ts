import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MenuEscritorioComponent } from './menu-escritorio/menu-escritorio.component';
import { MenuMovilComponent } from './menu-movil/menu-movil.component';



@NgModule({
  declarations: [
    MenuEscritorioComponent,
    MenuMovilComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], 
  exports: [
    MenuEscritorioComponent,
    MenuMovilComponent
  ]
})
export class ComponentesModule { }
