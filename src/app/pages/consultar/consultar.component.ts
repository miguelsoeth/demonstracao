import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { HistoricoService } from './historico.service';
import { HistoricoModel } from './historico.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  dialog = inject(MatDialog);
  router = inject(Router);
  historico = inject(HistoricoService);
  itensHistorico: HistoricoModel[] = [];
  displayedColumns: string[] = ['numero', 'perfil', 'actions'];

  constructor() { }

  ngOnInit(): void {
    this.historico.getAll().subscribe(
      (response) => {
        this.itensHistorico = response;
        console.log(this.itensHistorico)
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50%'
    });
  }

  performAction(element: HistoricoModel): void {
    console.log('Performing action for:', element.id);
    this.router.navigate(['/visualizar'], { queryParams: { id: element.id } });
  }
}
