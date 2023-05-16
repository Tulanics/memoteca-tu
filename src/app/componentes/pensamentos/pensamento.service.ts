import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  private readonly API = ' http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]> {
    const  intensPorPagina: number = 6
    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", intensPorPagina)

    if(filtro.trim().length > 2) {
      params = params.set("q", filtro)
    }

    if(favoritos) {
      params = params.set("favorito", true)
    }
    //return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}$_limit=${intensPorPagina}`)
    return this.http.get<Pensamento[]>(this.API, {params: params})
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  mudarFavorito(pensamento: Pensamento) : Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
