import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SeguroModel } from '../../models/SeguroModel';
import { SeguroService } from '../../services/seguro.service';
import { SeguroCreateUpdateComponent } from '../seguro-create-update/seguro-create-update.component';

@Component({
  selector: 'app-seguro-tabla',
  templateUrl: './seguro-tabla.component.html',
  styleUrls: ['./seguro-tabla.component.css']
})
export class SeguroTablaComponent implements OnInit {

  @Input('seguros') seguros: SeguroModel[] = [];
  @Output() public cargarSeguros = new EventEmitter<any>();
  constructor(private dialog: MatDialog
             ,private SeguroService: SeguroService
             ,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  update(seguro: SeguroModel){
    let dialogRef = this.dialog.open(SeguroCreateUpdateComponent, {
      width: '80vw',
      maxWidth: '400px',
      height: '60vh',
      maxHeight: '400px',
      disableClose: true,
      autoFocus: false,
      data: seguro
    });

    dialogRef.afterClosed().subscribe((response) => {
      if(response){
        this.cargarSeguros.emit();
      }
    });
  }

  delete(seguro: SeguroModel){
    this.SeguroService.Delete(seguro)
      .subscribe(response => {
        this.cargarSeguros.emit();
        this.openSnackBar('Eliminación exitosa');
      })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }

}
