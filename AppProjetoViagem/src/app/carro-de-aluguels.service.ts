import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarroAluguel } from './CarroDeAluguel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'})
  }

@Injectable({
  providedIn: 'root'
})
export class CarroDeAluguelsService {

  apiUrl = 'http://localhost:5000/CarroDeAluguel';
  constructor(private http: HttpClient) { }
  listar(): Observable<CarroAluguel[]>{
    const url = `${this.apiUrl}/ListarCarrosDisponiveis`;
    return this.http.get<CarroAluguel[]>(url);
  }
  cadastrar(carroAluguel: CarroAluguel): Observable<any> {
    const url = `${this.apiUrl}/CadastrarCarro`;
    return this.http.post<CarroAluguel>(url, carroAluguel, httpOptions);
  }
  alterar(carroAluguel: CarroAluguel): Observable<any> {
    const url = `${this.apiUrl}/AlterarStatusCarro`;
    return this.http.put<CarroAluguel>(url, carroAluguel, httpOptions);
  }
}
