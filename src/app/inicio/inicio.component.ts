import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 
 @ViewChild('stepper') private myStepper?: MatStepper;
  TipoDeConsulta: string = "";
  constructor() {}

  ngOnInit(): void {
  }

  goBack(){
    if(this.myStepper)
      this.myStepper.previous();
  }

  goForward(){
    if(this.myStepper)
      this.myStepper.next();
  }

  Consultar(valor :string){
    this.TipoDeConsulta = valor;
    this.goForward();
  }

}
