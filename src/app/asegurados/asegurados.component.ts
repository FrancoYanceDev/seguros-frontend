import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AseguradoCreateUpdateComponent } from './components/asegurado-create-update/asegurado-create-update.component';
import { AseguradoModel } from './models/AseguradoModel';
import { AseguradoService } from './services/asegurado.service';

@Component({
  selector: 'app-asegurados',
  templateUrl: './asegurados.component.html',
  styleUrls: ['./asegurados.component.css']
})
export class AseguradosComponent implements OnInit {
  asegurados: AseguradoModel[] = [];
  uploadFile: FormControl;
  constructor(private AseguradoService: AseguradoService
              ,private dialog: MatDialog
              ,private formBuilder: FormBuilder
              ,private _snackBar: MatSnackBar) { 
    this.uploadFile = this.formBuilder.control('', [
      Validators.required
    ]);
    this.Get();
  }

  ngOnInit(): void {
  }

  Get(){
    this.AseguradoService.Get()
      .subscribe(asegurados => {
        this.asegurados = asegurados;
      });
   }

  Create(){
    let dialogRef = this.dialog.open(AseguradoCreateUpdateComponent, {
      width: '90vw',
      maxWidth: '400px',
      height: '90vh',
      maxHeight: '700px',
      disableClose: true,
      autoFocus: false,
      data: null
    });

    dialogRef.afterClosed().subscribe((response) => {
        if(response){
          this.Get()
        }
    });
  }

  cargarAsegurados(){
    this.Get();
  }

  onChangeFile(event: any){
    let file: File = event.srcElement.files[0];
    
    if(file){
      this.AseguradoService.Import(file)
        .subscribe(response => {
          console.log(response)
          if(response.code == 500){
            this.openSnackBar(response.message);
            return;
          }


          this.openSnackBar("Datos ingresados correctamente");
          this.Get();
        })
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }

}
