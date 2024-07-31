import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PesquisaModel } from './pesquisar.model';
import { Observable } from 'rxjs';
import { HistoricoModel } from '../consultar/historico.model';
import { HistoricoService } from '../consultar/historico.service';

@Injectable({
  providedIn: 'root'
})
export class PesquisarService {

  private url = "http://localhost:3000/data";

  http = inject(HttpClient);
  historico = inject(HistoricoService);

  constructor() { }

  getAll(): Observable<PesquisaModel[]> {
    return this.http.get<PesquisaModel[]>(this.url);
  }

  getByCpf(cpf: string): Observable<PesquisaModel[]> {
    return this.http.get<PesquisaModel[]>(`${this.url}?cpf=${cpf}`);
  }

  postHistorico(item: HistoricoModel): Observable<HistoricoModel> {
    return this.historico.postItem(item);
  }
}
