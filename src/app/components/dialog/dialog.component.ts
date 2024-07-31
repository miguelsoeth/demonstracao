import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogModel } from './dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  router = inject(Router);
  dialogRef= inject(MatDialogRef<number>) ;

  infos: DialogModel = { numero: '', perfil: '' }

  constructor() { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {    
    this.router.navigate(['/pesquisar'], { queryParams: { ...this.infos } });
    this.dialogRef.close();
  }

}
