import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AseguradoModel } from '../../models/AseguradoModel';
import { AseguradoService } from '../../services/asegurado.service';
import { AseguradoCreateUpdateComponent } from '../asegurado-create-update/asegurado-create-update.component';
@Component({
  selector: 'app-asegurado-tabla',
  templateUrl: './asegurado-tabla.component.html',
  styleUrls: ['./asegurado-tabla.component.css']
})
export class AseguradoTablaComponent implements OnInit {
  @Input('asegurados') asegurados: AseguradoModel[] = [];
  @Output() public cargarSeguros = new EventEmitter<any>();
  constructor(private _snackBar: MatSnackBar
             ,private dialog: MatDialog
             ,private AseguradoService: AseguradoService) { }

  ngOnInit(): void {
  }

  update(asegurado: AseguradoModel){
    let dialogRef = this.dialog.open(AseguradoCreateUpdateComponent, {
      width: '90vw',
      maxWidth: '400px',
      height: '90vh',
      maxHeight: '700px',
      disableClose: true,
      autoFocus: false,
      data: asegurado
    });

    dialogRef.afterClosed().subscribe((response) => {
      if(response){
        this.cargarSeguros.emit();
      }
    });
  }

  delete(asegurado: AseguradoModel){
    this.AseguradoService.Delete(asegurado)
      .subscribe(response => {
        this.cargarSeguros.emit();
        this.openSnackBar('Eliminación exitosa');
      })
  }

  seguros(asegurado: AseguradoModel){

  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }
}
