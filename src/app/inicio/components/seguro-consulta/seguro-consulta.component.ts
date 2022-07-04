import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SeguroModel } from 'src/app/seguros/models/SeguroModel';
import { SeguroService } from 'src/app/seguros/services/seguro.service';

@Component({
  selector: 'app-seguro-consulta',
  templateUrl: './seguro-consulta.component.html',
  styleUrls: ['./seguro-consulta.component.css']
})
export class SeguroConsultaComponent implements OnInit {

  consultaForm: FormControl;
  seguro?: any = undefined;
  constructor(private SeguroService: SeguroService
             ,private FormBuilder: FormBuilder
             ,private _snackBar: MatSnackBar) { 
    this.consultaForm = this.FormBuilder.control('', [
      Validators.required,
    ]);
  }

  ngOnInit(): void {
  }
  BuscarAsegurado(){
    if(!this.consultaForm.valid){
      this.openSnackBar('El código no es válido');
      return;
    }

    this.SeguroService.GetAsegurados(this.consultaForm.value)
      .subscribe(seguro => {
        this.seguro = seguro;
        console.log(seguro)
      })

  }

  BuscarAseguradoConEnter(event: KeyboardEvent){
    if(event.keyCode == 13)
      this.BuscarAsegurado()
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }


}
