import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/compartido/services/Api';
import {AseguradoModel} from '../models/AseguradoModel';

@Injectable()
export class AseguradoService extends Api {

  constructor(private http: HttpClient) {
    super();
   }

   public Get(): Observable<AseguradoModel[]>{
    return this.http.get<AseguradoModel[]>(`${this.route}/asegurado`)
  }
  public GetByCedula(cedula: string): Observable<AseguradoModel>{
    return this.http.get<AseguradoModel>(`${this.route}/asegurado/${cedula}`)
  }

  public Import(aseguradoFile: File): Observable<any>{
    const uploadData = new FormData();
    uploadData.append("file", aseguradoFile);

    console.log(aseguradoFile)

    return this.http.post<any>(`${this.route}/asegurado/import`, uploadData)
  }

  public Create(asegurado: AseguradoModel): Observable<AseguradoModel[]>{
    return this.http.post<AseguradoModel[]>(`${this.route}/asegurado`, asegurado)
  }

  public Update(asegurado: AseguradoModel): Observable<AseguradoModel[]>{
    return this.http.put<AseguradoModel[]>(`${this.route}/asegurado`, asegurado)
  }
  public Delete(asegurado: AseguradoModel): Observable<AseguradoModel[]>{
    return this.http.delete<AseguradoModel[]>(`${this.route}/asegurado/${asegurado.Cedula}`)
  }
}
