import { HttpClient, HttpHeaders } from '@angular/common/http';import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { Paises } from './Paises';
const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class PaisessService {

  apiUrl = 'http://localhost:5000/Paises';
  constructor(private http: HttpClient) { }
  listaPaisesr(): Observable<Paises[]>{
    const url = `${this.apiUrl}/listaPaises`;
    return this.http.get<Paises[]>(url);
  }
  CadastrarPaises(paises: Paises): Observable<any> {
    const url = `${this.apiUrl}/CadastrarPaises`;
    return this.http.post<Paises>(url, paises, httpOptions);
  }
}
