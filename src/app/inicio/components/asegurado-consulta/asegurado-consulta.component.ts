import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AseguradoModel } from 'src/app/asegurados/models/AseguradoModel';
import { AseguradoService } from 'src/app/asegurados/services/asegurado.service';

@Component({
  selector: 'app-asegurado-consulta',
  templateUrl: './asegurado-consulta.component.html',
  styleUrls: ['./asegurado-consulta.component.css']
})
export class AseguradoConsultaComponent implements OnInit {

  consultaForm: FormControl;
  asegurado?: AseguradoModel = undefined;

  constructor(private FormBuilder: FormBuilder
            ,private _snackBar: MatSnackBar
            ,private AseguradoService:AseguradoService) {
    this.consultaForm = this.FormBuilder.control('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
      Validators.maxLength(10)
    ]);
   }

  ngOnInit(): void {
  }

  BuscarAsegurado(){
    if(!this.consultaForm.valid){
      this.openSnackBar('El número de cédula no tiene el formato correcto');
      return;
    }

    this.AseguradoService.GetByCedula(this.consultaForm.value)
      .subscribe(asegurado => {
        this.asegurado = asegurado;
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
