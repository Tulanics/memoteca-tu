import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Esse decorator indica ao Angular que essa classe é injetável e pode ser utilizada em outras classes.
@Injectable({
  /* 'providedIn' : Esse nome vem de provider (provedor), que significa fornecedor.
  Ele é o responsável por fornecer uma instância dessa classe
  através da injeção de dependência.
  Nesse caso, o valor dessa propriedade: providedIn: 'root',
  indica que o Angular deve fornecer o serviço no injetor raiz, em outras palavras,
  significa que esse serviço é visível para toda a aplicação e você pode injetá-lo
  em qualquer lugar do seu projeto.*/
  providedIn: 'root'
})
export class PensamentoService {

  constructor(http: HttpClient) {

   }
}
