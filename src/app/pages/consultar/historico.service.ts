import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HistoricoModel } from './historico.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private url = "http://localhost:3000/historicos";

  http = inject(HttpClient);

  constructor() { }

  getAll(): Observable<HistoricoModel[]> {
    return this.http.get<HistoricoModel[]>(this.url);
  }

  getById(id: string): Observable<HistoricoModel> {
    return this.http.get<HistoricoModel>(`${this.url}/${id}`);
  }

  postItem(item: HistoricoModel): Observable<HistoricoModel> {
    return this.http.post<HistoricoModel>(this.url, item);
  }
}
