import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';

@NgModule({ //decorator
  declarations: [
    AppComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//classes de serviços
  bootstrap: [AppComponent] // indica qual componente será primeiramente renderizado na aplicação
})
export class AppModule { } /*componentes, diretivas e pipes que se quer exortar para fora do modulo, para que
sejam visíveis por outros módulos*/
