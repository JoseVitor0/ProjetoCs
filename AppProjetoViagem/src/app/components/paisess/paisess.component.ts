import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisessService } from '../../paisess.service';
import { Paises } from '../../Paises';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paisess',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paisess.component.html',
  styleUrl: './paisess.component.css'
})

export class PaisessComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  constructor(private paisesservice: PaisessService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Cadastrar Paises';
    this.formulario = new FormGroup({
      nomepais: new FormControl(null),
      continente: new FormControl(null),
      estacaoano: new FormControl(null)
    })
  }
  enviarFormulario():
    void {
      const paises: Paises = this.formulario.value;
      this.paisesservice.CadastrarPaises(paises).subscribe(result => {
      alert('Pais cadastrado com sucesso');
    })
}
}
