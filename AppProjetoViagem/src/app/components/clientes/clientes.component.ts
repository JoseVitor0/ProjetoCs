import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../../Cliente';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit{

  formulario: any;
  tituloFormulario: string = '';
  constructor(private clienteservice: ClientesService) { }
  ngOnInit(): void {
    this.tituloFormulario = 'Cadastrar Cliente';
    this.formulario = new FormGroup({
      cpf: new FormControl(null),
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      datanascimento: new FormControl(null),
      email: new FormControl(null),
      senha: new FormControl(null)
    })
  }
  enviarFormulario():
    void {
      const cliente: Cliente = this.formulario.value;
      this.clienteservice.CadastrarCliente(cliente).subscribe(result => {
      alert('Cliente Cadastrado com sucesso');
    })
  }
}
