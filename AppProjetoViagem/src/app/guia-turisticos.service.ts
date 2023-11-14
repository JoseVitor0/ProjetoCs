import { HttpClient, HttpHeaders } from '@angular/common/http';import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { GuiaTuristico } from './GuiaTuristico';
const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class GuiaTuristicosService {

  apiUrl = 'http://localhost:5000/GuiaTuristico';
  constructor(private http: HttpClient) { }
  listar(): Observable<GuiaTuristico[]>{
    const url = `${this.apiUrl}/ListarGuiasTuristicos`;
    return this.http.get<GuiaTuristico[]>(url);
  }
  CadastrarGuiaTuristico(guiaturistico: GuiaTuristico): Observable<any> {
    const url = `${this.apiUrl}/CadastrarGuiaTuristico`;
    return this.http.post<GuiaTuristico>(url, guiaturistico, httpOptions);
  }
  AlterarStatusGuia(guiaturistico: GuiaTuristico): Observable<any> {
    const url = `${this.apiUrl}/AlterarStatusGuia/{status}`;
    return this.http.put<GuiaTuristico>(url, guiaturistico, httpOptions);
  }
}
