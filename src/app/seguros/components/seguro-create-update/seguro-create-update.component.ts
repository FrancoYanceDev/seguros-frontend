import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SeguroModel } from '../../models/SeguroModel';
import { SeguroService } from '../../services/seguro.service';

@Component({
  selector: 'app-seguro-create-update',
  templateUrl: './seguro-create-update.component.html',
  styleUrls: ['./seguro-create-update.component.css']
})
export class SeguroCreateUpdateComponent implements OnInit {

  SeguroForm: FormGroup;
  isUpdate: boolean = false;

  constructor(public dialogRef: MatDialogRef<SeguroCreateUpdateComponent>
             ,@Inject(MAT_DIALOG_DATA) public seguro: SeguroModel
             ,private FormBuilder: FormBuilder
             ,private _snackBar: MatSnackBar
             ,private SeguroService: SeguroService) { 



    this.SeguroForm = this.FormBuilder.group({
      codigo: new FormControl(''),
      nombre:new FormControl('', [Validators.required, Validators.maxLength(100)]),
      sumaAsegurada: new FormControl('', [
                                          Validators.required
                                          ,Validators.pattern(/^([0-9]{3}|[0-9]{2}|[0-9])(\.[0-9]{2}|\.[0-9])?$/)
                                        ]),
      prima: new FormControl('', [Validators.required,Validators.pattern(/^([0-9]{3}|[0-9]{2}|[0-9])(\.[0-9]{2}|\.[0-9])?$/)]),
      asegurados: new FormControl([]),
    });

    if(this.seguro){
      this.UpdateDateForm();
      this.isUpdate = true;
    }

  }

  ngOnInit(): void {
  }


  UpdateDateForm(){
    this.SeguroForm.patchValue({
      codigo: this.seguro.Codigo,
      nombre: this.seguro.Nombre,
      sumaAsegurada: this.seguro.SumaAsegurada,
      prima: this.seguro.Prima,
      asegurados: [],
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }

  Save(){

    if(!this.SeguroForm.valid){
      this.openSnackBar('No es válido el formulario');
      return;
    }

    if(this.ValidarCantidadDinero()){
      let seguro: SeguroModel = {
        Codigo:this.seguro ? this.seguro.Codigo : 0,
        Nombre: this.SeguroForm.value.nombre,
        SumaAsegurada: parseFloat(this.SeguroForm.value.sumaAsegurada),
        Prima: parseFloat(this.SeguroForm.value.prima),
        Asegurados: []
      };



      //Update
      if(this.isUpdate){
        this.SeguroService.Update(seguro)
          .subscribe(response => {
            this.openSnackBar('Actualización exitosa');
            this.close(true);
          });
      }

      //Create
      if(!this.isUpdate){
        this.SeguroService.Create(seguro)
          .subscribe(response => {
            this.openSnackBar('Creación exitosa');
            this.close(true);
          })

 
      }
    }


  }

  close(state: boolean){
    this.dialogRef.close(state)
  }


  ValidarCantidadDinero(){
    let seguro = this.SeguroForm.value;
    if(seguro.sumaAsegurada < seguro.prima){
      this.openSnackBar('La Suma Asegurada no puede ser mayor a la Prima');
      return false;
    }

    return true;
  }

}
