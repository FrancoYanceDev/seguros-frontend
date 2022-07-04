import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/compartido/services/Api';
import { SeguroModel } from '../models/SeguroModel';

@Injectable()
export class SeguroService extends Api {

  constructor(private http: HttpClient) {
    super();
   }

  public Get(): Observable<SeguroModel[]>{
    return this.http.get<SeguroModel[]>(`${this.route}/seguro`)
  }

  public GetAsegurados(codigo: number): Observable<SeguroModel>{
    return this.http.get<SeguroModel>(`${this.route}/seguro/${codigo}`)
  }

  public Create(seguro: SeguroModel): Observable<SeguroModel[]>{
    return this.http.post<SeguroModel[]>(`${this.route}/seguro`, seguro)
  }

  public Update(seguro: SeguroModel): Observable<SeguroModel[]>{
    return this.http.put<SeguroModel[]>(`${this.route}/seguro`, seguro)
  }

  public Delete(seguro: SeguroModel): Observable<SeguroModel[]>{
    return this.http.delete<SeguroModel[]>(`${this.route}/seguro/${seguro.Codigo}`)
  }
}
