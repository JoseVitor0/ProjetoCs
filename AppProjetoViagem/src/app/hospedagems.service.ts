import { HttpClient, HttpHeaders } from '@angular/common/http';import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { Hospedagem } from './Hospedagem';
const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class HospedagemsService {

  apiUrl = 'http://localhost:5000/Hospedagem';
  constructor(private http: HttpClient) { }
  listaHospedagem(): Observable<Hospedagem[]>{
    const url = `${this.apiUrl}/listaHospedagem`;
    return this.http.get<Hospedagem[]>(url);
  }
  CadastrarHospedagem(hospedagem: Hospedagem): Observable<any> {
    const url = `${this.apiUrl}/CadastrarHospedagem`;
    return this.http.post<Hospedagem>(url, hospedagem, httpOptions);
  }
  MudarStatusHospedagem(hospedagem: Hospedagem): Observable<any> {
    const url = `${this.apiUrl}/mudarStatusHospedagem/{status}`;
    return this.http.put<Hospedagem>(url, hospedagem, httpOptions);
  }
}
