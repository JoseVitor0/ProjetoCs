import { HttpClient, HttpHeaders } from '@angular/common/http';import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { Companhia } from './Companhia';
const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class CompanhiasService {

  apiUrl = 'http://localhost:5000/Companhia';
  constructor(private http: HttpClient) { }
  listaCompanhia(): Observable<Companhia[]>{
    const url = `${this.apiUrl}/ListarCompanhia`;
    return this.http.get<Companhia[]>(url);
  }
  CadastrarCompanhia(companhia: Companhia): Observable<any> {
    const url = `${this.apiUrl}/CadastrarCompanhia`;
    return this.http.post<Companhia>(url, companhia, httpOptions);
  }
}
