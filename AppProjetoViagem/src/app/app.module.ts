import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';

import { CarroDeAluguelsService } from './carro-de-aluguels.service';
import { CidadesService } from './cidades.service';
import { ClientesService } from './clientes.service';
import { CompanhiasService } from './companhias.service';
import { GuiaTuristicosService } from './guia-turisticos.service';
import { HospedagemsService } from './hospedagems.service';
import { PaisessService } from './paisess.service';
import { PassagemsService } from './passagems.service';

import { CarroDeAluguelsComponent } from './components/carro-de-aluguels/carro-de-aluguels.component';
import { CidadesComponent } from './components/cidades/cidades.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CompanhiasComponent } from './components/companhias/companhias.component';
import { GuiaTuristicosComponent } from './components/guia-turisticos/guia-turisticos.component';
import { HospedagemsComponent } from './components/hospedagems/hospedagems.component';
import { PaisessComponent } from './components/paisess/paisess.component';
import { PassagemsComponent } from './components/passagems/passagems.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, CarroDeAluguelsService, CompanhiasService, CidadesService, ClientesService, GuiaTuristicosService, HospedagemsService, PaisessService, PassagemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
