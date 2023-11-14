import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl = 'http://localhost:5000/Cliente';
  constructor(private http: HttpClient) { }
  loginUsuario(): Observable<Cliente[]>{
    const url = `${this.apiUrl}/LoginUsuario`;
    return this.http.get<Cliente[]>(url);
  }
  CadastrarCliente(cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/CadastrarClientes`;
    return this.http.post<Cliente>(url, cliente, httpOptions);
  }
}
