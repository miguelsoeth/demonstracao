import { ActivatedRoute } from '@angular/router';
import { PesquisarService } from './pesquisar.service';
import { Component, OnInit, inject } from '@angular/core';
import { PesquisaModel } from './pesquisar.model';
import { HistoricoModel } from '../consultar/historico.model';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  pesquisar = inject(PesquisarService);
  route = inject(ActivatedRoute);
  resultados: PesquisaModel[] = [];
  itemHistorico: HistoricoModel = {
    numero: '',
    perfil: '',
    dados: []
  };

  constructor() { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      console.log("PARAMETROS:\n", params);

      const numero = params['numero'];
      if (numero) {
        this.pesquisar.getByCpf(numero).subscribe(
          result => {
            this.resultados = result;            
            
            console.log("RESULTADO:\n", this.resultados);

            console.log("\nPERCEBE-SE QUE AQUI TEMOS TANTO OS DADOS DA PESQUISA QUANTO OS\nDADOS DO RESULTADO, SENDO UM BOM MOMENTO PARA GUARDAR NO BANCO\n");

            //FAZENDO OBJ EXEMPLO:
            this.itemHistorico!.numero = numero;
            this.itemHistorico!.perfil = params['perfil'];
            this.itemHistorico!.dados = result;
            

            console.log("ITEM HISTORICO:\n", this.itemHistorico);
            this.pesquisar.postHistorico(this.itemHistorico).subscribe();


          },
          error => {
            console.error('Error:', error);
          }
        );
      }
    });
  }

}
