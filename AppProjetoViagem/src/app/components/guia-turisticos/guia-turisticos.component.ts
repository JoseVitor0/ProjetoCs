import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiaTuristicosService } from '../../guia-turisticos.service';
import { GuiaTuristico } from '../../GuiaTuristico';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guia-turisticos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guia-turisticos.component.html',
  styleUrl: './guia-turisticos.component.css'
})

export class GuiaTuristicosComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  constructor(private guiaturisticoservice: GuiaTuristicosService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Cadastrar Guia Turistico';
    this.formulario = new FormGroup({
      documentoguia: new FormControl(null),
      nome: new FormControl(null),
      empresa: new FormControl(null),
      valor: new FormControl(null),
      nota: new FormControl(null),
      pais: new FormControl(null),
      status: new FormControl(null)
    })
  }
  enviarFormulario():
    void {
      const guiaturistico: GuiaTuristico = this.formulario.value;
      this.guiaturisticoservice.CadastrarGuiaTuristico(guiaturistico).subscribe(result => {
      alert('Companhia Cadastrada com sucesso');
    })
}
}
