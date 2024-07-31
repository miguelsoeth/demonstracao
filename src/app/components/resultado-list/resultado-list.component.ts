import { Component, Input, OnInit } from '@angular/core';
import { PesquisaModel } from 'src/app/pages/pesquisar/pesquisar.model';

@Component({
  selector: 'app-resultado-list',
  templateUrl: './resultado-list.component.html',
  styleUrls: ['./resultado-list.component.css']
})
export class ResultadoListComponent implements OnInit {

  @Input() resultados: PesquisaModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
