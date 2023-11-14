import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesService } from '../../cidades.service';
import { Cidades } from '../../Cidade';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cidades.component.html',
  styleUrl: './cidades.component.css'
})
export class CidadesComponent implements OnInit {

  formulario: any;
  tituloFormulario: string = '';
  constructor(private cidadeService: CidadesService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Cidades';
    this.formulario = new FormGroup({
      cidade: new FormControl(null),
      país: new FormControl(null),
      continente: new FormControl(null),
      nhabitantes: new FormControl(null),
      pturistico: new FormControl(null)
    })
  }
  enviarFormulario():
    void {
      const cidade: Cidades = this.formulario.value;
      this.cidadeService.CadastrarCidades(cidade).subscribe(result => {
      alert('Cidade Cadastrada com sucesso.');
    })
  }

}
