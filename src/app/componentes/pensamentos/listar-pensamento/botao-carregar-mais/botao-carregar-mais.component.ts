import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css']
})
export class BotaoCarregarMaisComponent implements OnInit {

  /* Esse atributo vai receber informações do componente pai que vai ser o componente de listagem
  para eu colocar uma lógica para o botão aparecer ou desaparecer de acordo com a quantidade de pensamentos
  que ainda houverem para serem exibidos. Por isso é decorado com @Input() */
  @Input() haMaisPensamentos: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
