import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroDeAluguelsComponent } from './components/carro-de-aluguels/carro-de-aluguels.component';
import { CidadesComponent } from './components/cidades/cidades.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CompanhiasComponent } from './components/companhias/companhias.component';
import { HospedagemsComponent } from './components/hospedagems/hospedagems.component';
import { GuiaTuristicosComponent } from './components/guia-turisticos/guia-turisticos.component';
import { PassagemsComponent } from './components/passagems/passagems.component';
import { PaisessComponent } from './components/paisess/paisess.component';

const routes: Routes = [
  {path: 'carrosaluguel', component:CarroDeAluguelsComponent},
  {path: 'cidades', component:CidadesComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'companhia', component:CompanhiasComponent},
  {path: 'hospedagem', component:HospedagemsComponent},
  {path: 'guiaturistico', component:GuiaTuristicosComponent},
  {path: 'passagem', component:PassagemsComponent},
  {path: 'paises', component:PaisessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
