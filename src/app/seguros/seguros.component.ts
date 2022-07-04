import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SeguroCreateUpdateComponent } from './components/seguro-create-update/seguro-create-update.component';
import { SeguroModel } from './models/SeguroModel';
import { SeguroService } from './services/seguro.service';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {

  seguros: SeguroModel[] = [];

  constructor(private SeguroService: SeguroService
             ,private dialog: MatDialog) {
      this.Get();
   }

   Get(){
    this.SeguroService.Get()
      .subscribe(seguros => {
        this.seguros = seguros;
      });
   }

  ngOnInit(): void {
  }

  Create(){
    let dialogRef = this.dialog.open(SeguroCreateUpdateComponent, {
      width: '80vw',
      maxWidth: '400px',
      height: '60vh',
      maxHeight: '400px',
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

  cargarSeguros(){
    this.Get();
  }
}
