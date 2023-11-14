import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroDeAluguelsService } from '../../carro-de-aluguels.service';
import { CarroAluguel } from '../../CarroDeAluguel';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carro-de-aluguels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carro-de-aluguels.component.html',
  styleUrl: './carro-de-aluguels.component.css'
})
export class CarroDeAluguelsComponent implements OnInit{
  formulario: any;
  tituloFormulario: string = '';
  constructor(private carrodealuguelsService: CarroDeAluguelsService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Alguel de Carro';
    this.formulario = new FormGroup({
      placa: new FormControl(null),
      modelo: new FormControl(null),
      marca: new FormControl(null),
      valorDiaria: new FormControl(null),
      disponivel: new FormControl(null)
    })
  }
  enviarFormulario():
    void {
      const carroAluguel: CarroAluguel = this.formulario.value;
      this.carrodealuguelsService.cadastrar(carroAluguel).subscribe(result => {
      alert('Carro inserido com sucesso.');
    })
  }
}
