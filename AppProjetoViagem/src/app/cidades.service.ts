import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidades } from './Cidade';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  apiUrl = 'http://localhost:5000/Cidade';
  constructor(private http: HttpClient) { }
  listaCidades(): Observable<Cidades[]>{
    const url = `${this.apiUrl}/ListarCidades`;
    return this.http.get<Cidades[]>(url);
  }
  CadastrarCidades(cidades: Cidades): Observable<any> {
    const url = `${this.apiUrl}/CadastrarCidades`;
    return this.http.post<Cidades>(url, cidades, httpOptions);
  }
}
