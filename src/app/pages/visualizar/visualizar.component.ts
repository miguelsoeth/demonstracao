import { Component, OnInit, inject } from '@angular/core';
import { HistoricoService } from '../consultar/historico.service';
import { ActivatedRoute } from '@angular/router';
import { HistoricoModel } from '../consultar/historico.model';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  historico=inject(HistoricoService);
  route = inject(ActivatedRoute);
  historicoData?: HistoricoModel;

  constructor() { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.historico.getById(id).subscribe(
          result => {
            this.historicoData = result;
            console.log(this.historicoData);
          },
          error => {
            console.error('Error fetching data:', error);
          }
        );
      }
    });
  }

}
