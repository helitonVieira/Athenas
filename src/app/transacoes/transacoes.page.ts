import { Component, OnInit } from '@angular/core';
import { Transacoes } from './shared/transacoes';
import { TransacoesService } from './service/transacoes.service';
@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.page.html',
  styleUrls: ['./transacoes.page.scss'],
})
export class TransacoesPage implements OnInit {

  searchTerm: String;
  transacoes: Transacoes[];
  textoBuscar = '';

  constructor(private transacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.transacoesService.read().subscribe(transacoes => {
      this.transacoes = transacoes
    })
  }

  busca(event){
    this.textoBuscar = event.detail.value;
  }


}
