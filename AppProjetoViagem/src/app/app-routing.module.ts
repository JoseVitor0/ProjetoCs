import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroDeAluguelsComponent } from './components/carro-de-aluguels/carro-de-aluguels.component';
import { CidadesComponent } from './components/cidades/cidades.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [{
  path: 'carrosaluguel', component:CarroDeAluguelsComponent,
  path: 'cidades', component:CidadesComponent,
  path: 'carrosaluguel', component:CarroDeAluguelsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
