import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanhiasService } from '../../companhias.service';
import { Companhia } from '../../Companhia';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companhias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './companhias.component.html',
  styleUrl: './companhias.component.css'
})
export class CompanhiasComponent implements OnInit{

  formulario: any;
  tituloFormulario: string = '';
  constructor(private companhiaservice: CompanhiasService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Cadastrar Companhia';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      cnpj: new FormControl(null),
      aviões: new FormControl(null),
      destinos: new FormControl(null),
      pacotes: new FormControl(null),
      seguros: new FormControl(null)
    })
  }
  enviarFormulario():
    void {
      const companhia: Companhia = this.formulario.value;
      this.companhiaservice.CadastrarCompanhia(companhia).subscribe(result => {
      alert('Companhia Cadastrada com sucesso');
    })
  }

}
