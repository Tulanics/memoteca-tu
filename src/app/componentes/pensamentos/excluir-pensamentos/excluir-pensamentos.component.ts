import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css']
})
export class ExcluirPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute /*fornece informações sobre os parametros,
    rotas, caminhos que virão dos cards de pensamentos*/
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento => {
      this.pensamento = pensamento
    }))
  }

  excluirPensamento(){
    if(this.pensamento.id) {
      this.service
      .excluir(this.pensamento.id)
      .subscribe(() => this.router
        .navigate(['/listarPensamento']))
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
