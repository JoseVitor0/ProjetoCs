import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospedagemsService } from '../../hospedagems.service';
import { Hospedagem } from '../../Hospedagem';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hospedagems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospedagems.component.html',
  styleUrl: './hospedagems.component.css'
})
export class HospedagemsComponent implements OnInit{

  formulario: any;
  tituloFormulario: string = '';
  constructor(private hospedagemservices: HospedagemsService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Cadastrar Hospedagem';
    this.formulario = new FormGroup({
      cnpj: new FormControl(null),
      alimentacao: new FormControl(null),
      valordiaria: new FormControl(null),
      estrelas: new FormControl(null),
      status: new FormControl(null)
    })
  }
  enviarFormulario():
    void {
      const hospedagem: Hospedagem = this.formulario.value;
      this.hospedagemservices.CadastrarHospedagem(hospedagem).subscribe(result => {
      alert('Companhia Cadastrada com sucesso');
    })
}
}
