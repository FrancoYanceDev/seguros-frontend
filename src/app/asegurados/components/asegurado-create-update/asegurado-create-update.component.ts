import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SeguroModel } from 'src/app/seguros/models/SeguroModel';
import { SeguroService } from 'src/app/seguros/services/seguro.service';
import { AseguradoModel } from '../../models/AseguradoModel';
import { AseguradoService } from '../../services/asegurado.service';
import { SeguroAsegurado } from '../../models/SeguroAsegurado';

@Component({
  selector: 'app-asegurado-create-update',
  templateUrl: './asegurado-create-update.component.html',
  styleUrls: ['./asegurado-create-update.component.css']
})
export class AseguradoCreateUpdateComponent implements OnInit {

  AseguradoForm: FormGroup;
  isUpdate: boolean = false;
  seguros: SeguroModel[] = [];


  constructor(public dialogRef: MatDialogRef<AseguradoCreateUpdateComponent>
    ,@Inject(MAT_DIALOG_DATA) public asegurado: AseguradoModel
    ,private FormBuilder: FormBuilder
    ,private _snackBar: MatSnackBar
    ,private SeguroService: SeguroService
    ,private AseguradoService: AseguradoService) { 

      this.Get();
      this.AseguradoForm = this.FormBuilder.group({
        Cedula: new FormControl('',[Validators.pattern(/^[0-9]{10}$/)]),
        Nombre:new FormControl('', [Validators.required, Validators.maxLength(100)]),
        Telefono: new FormControl('', [
                                        Validators.required
                                        ,Validators.pattern(/^(\+593|593)?0?[0-9]{9}$/)
                                      ]),

      Edad: new FormControl('',[Validators.required,
                                Validators.min(18),
                                Validators.max(150)]),
      Seguros: this.FormBuilder.array([]),
      });

      if(this.asegurado){
        this.UpdateForm();
        this.isUpdate = true;
      }
    }

  ngOnInit(): void {
  }

  Get(){
    this.SeguroService.Get()
      .subscribe(seguros => {
        this.seguros = seguros;
  
        this.CreateFormArray();
      });
   }


  UpdateForm(){
    this.AseguradoForm.patchValue({
      Cedula: this.asegurado.Cedula,
      Nombre: this.asegurado.Nombre,
      Telefono: this.asegurado.Telefono,
      Edad: this.asegurado.Edad,
    });
  }


  get Seguros(){
    return this.AseguradoForm.controls["Seguros"] as FormArray;
  }

  CreateFormArray(){
    this.seguros.map(seguro => {
      this.AddControlFormArray(seguro);
    });
  }

  AddControlFormArray(seguro: SeguroModel){
    let activate = false;

    if(this.asegurado){
      let seguroExiste = this.asegurado.Seguros.filter((seg: any) => seg.SeguroCodigo == seguro.Codigo);
      if(seguroExiste.length > 0){
        activate = true;
      }
    }


    let control = this.FormBuilder.group({
      codigo: new FormControl(seguro.Codigo),
      nombre: new FormControl(seguro.Nombre),
      sumaAsegurada: new FormControl(seguro.SumaAsegurada),
      prima: new FormControl(seguro.Prima),
      asegurados: [], 

      Selected: new FormControl(activate)
    });


    this.Seguros.push(control);
  }

  Save(){

    // Validar campos del formulario
    if(!this.AseguradoForm.valid){
      this.openSnackBar('No es válido el formulario');
      return;
    }

      //Update
      if(this.isUpdate){
        this.AseguradoService.Update(this.CrearAsegurado())
          .subscribe(response => {
            this.openSnackBar('Actualización exitosa');
            this.close(true);
          });
      }

      //Create
      if(!this.isUpdate){
        this.AseguradoService.Create(this.CrearAsegurado())
        .subscribe(response => {
          this.openSnackBar('Creación exitosa');
          this.close(true);
        });
      }
  }


  CrearAsegurado(){
    let actualAsegurado = this.AseguradoForm.value;

    let asegurado: AseguradoModel = {
      Cedula: actualAsegurado.Cedula,
      Nombre: actualAsegurado.Nombre,
      Telefono: actualAsegurado.Telefono,
      Edad: actualAsegurado.Edad,
      Seguros: this.AgregarSegurosSeleccionados()
    }

    return asegurado;
  }


  AgregarSegurosSeleccionados(){
    let SegurosAsegurados: SeguroAsegurado[] = [];
    this.AseguradoForm.value.Seguros.forEach((seguro:any) => {

        if(seguro.Selected){
          let seguroAsegurado: SeguroAsegurado = {
            Id: 0,
            SeguroCodigo: seguro.codigo,
            AseguradoCedula: this.asegurado ? this.asegurado.Cedula : this.AseguradoForm.value.Cedula,
            Seguro: undefined,
            Asegurado: undefined
          };
          
          SegurosAsegurados.push(seguroAsegurado);
        }          
    });

    return SegurosAsegurados;

  } 



  close(state: boolean){
    this.dialogRef.close(state)
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }



}
