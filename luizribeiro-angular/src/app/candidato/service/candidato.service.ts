import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Candidato } from './../../model/candidato';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private readonly API = 'api/candidato';
  constructor(private httpClient: HttpClient) {
  }

  public list() {
    return this.httpClient.get<Candidato[]>(this.API).pipe(first(), delay(0));
  }
  public listGroupByEstado() {
    return this.httpClient.get<Candidato[]>(`${this.API}/GroupByEstado`).pipe(first(), delay(0));
  }
  public listGroupByFaixaEtaria() {
    return this.httpClient.get<Candidato[]>(`${this.API}/GroupByFaixaEtaria`).pipe(first(), delay(0));
  }
  public listGroupByGenero() {
    return this.httpClient.get<Candidato[]>(`${this.API}/GroupByGenero`).pipe(first(), delay(0));
  }
  public listGroupBySangue() {
    return this.httpClient.get<Candidato[]>(`${this.API}/GroupBySanguineo`).pipe(first(), delay(0));
  }
  public listGroupByReceptor() {
    return this.httpClient.get<Candidato[]>(`${this.API}/GroupByReceptor`).pipe(first(), delay(0));
  }
  public loadById(id: string) {
    return this.httpClient.get<Candidato>(`${this.API}/${Number(id)}`);
  }

  public remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  public save(record: Partial<Candidato>) {
    if (record.id)
      return this.httpClient.put<Candidato>(`${this.API}/${record.id}`, record).pipe(first());
    else
      return this.httpClient.post<Candidato>(this.API, record).pipe(first());
  }
}
