import { Component, OnInit } from '@angular/core';
import { Transacoes } from './shared/transacoes';
import { TransacoesService } from './service/transacoes.service';


@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.page.html',
  styleUrls: ['./transacoes.page.scss'],
})
export class TransacoesPage implements OnInit {

  seachTerm: String;
  transacoes: Transacoes[];


  constructor(private transacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.transacoesService.read().subscribe(transacoes => {
      this.transacoes = transacoes
    })
  }

  doSerchClear() {
    this.ngOnInit();
  }

  async doSerchBarChange($event: any) {
    const value = $event.target.value;
    if (value && value.length >= 2) {
      this.transacoes = await this.contactService.filter(value);
    }
  }


}
