import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassagemsService } from '../../passagems.service';
import { Passagem } from '../../Passagem';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passagems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './passagems.component.html',
  styleUrl: './passagems.component.css'
})

export class PassagemsComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  constructor(private passagemservice: PassagemsService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Cadastrar Passagem';
    this.formulario = new FormGroup({
      nomepassageiro: new FormControl(null),
      dataembarque: new FormControl(null),
      destino: new FormControl(null),
      localembarque: new FormControl(null),
      classe: new FormControl(null),
      nconexoes: new FormControl(null),
      assento: new FormControl(null)
    })
  }
  enviarFormulario():
    void {
      const passagem: Passagem = this.formulario.value;
      this.passagemservice.CadastrarPassagem(passagem).subscribe(result => {
      alert('Passagem cadastrada com sucesso');
    })
}
}
