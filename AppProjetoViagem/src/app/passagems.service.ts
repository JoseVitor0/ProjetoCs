import { HttpClient, HttpHeaders } from '@angular/common/http';import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { Passagem } from './Passagem';
const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class PassagemsService {

  apiUrl = 'http://localhost:5000/Passagem';
  constructor(private http: HttpClient) { }
  listaPassagem(): Observable<Passagem[]>{
    const url = `${this.apiUrl}/listaPassagem`;
    return this.http.get<Passagem[]>(url);
  }
  CadastrarPassagem(passagem: Passagem): Observable<any> {
    const url = `${this.apiUrl}/CadastrarHospedagem`;
    return this.http.post<Passagem>(url, passagem, httpOptions);
  }
}
