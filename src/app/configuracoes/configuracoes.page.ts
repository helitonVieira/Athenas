
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { ContaService } from '../contas-bancarias/service/conta.service';
import { Conta } from '../contas-bancarias/conta';
import { Cartao } from '../cartao/cartao';
import { CartaoService } from '../cartao/service/cartao.service';
import { CategoriaService } from '../categoria/service/categoria.service';
import { Categoria } from '../categoria/categoria';


@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  searchTerm: String;
  contas: Conta[];
  textoBuscar = '';
  subtitulo = '';
  cartao: Cartao[];
  categoria: Categoria[];
  //const cartaoVisible = document.querySelector('#btnCartaoVisible') as HTMLAnchorElement;

  constructor(
    private contaService: ContaService,
    private cartaoService: CartaoService,
    private categoriaService: CategoriaService,
     private router: Router,
     private toastCtrl: ToastController,
     private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.subtitulo = 'Configuração Conta Bancaria';
   //<HTMLInputElement>document.querySelector('#btnCartaoVisible').checkVisibility;
   this.cartao = [];
    this.categoria = [];
    this.contas = [];


    this.buscaConta();
  }

  busca(event){
    this.textoBuscar = event.detail.value;
  }

  public novo(){
    this.router.navigate(['/contas/contas-form']);
  }
  public buscaConta(){
    this.cartao = [];
    this.categoria = [];
    this.subtitulo = 'Configuração Conta Bancaria';
    this.contaService.read().subscribe(contas => {
      this.contas = contas
    })
  }
  public buscaCartao(){
    this.contas = [];
    this.categoria = [];
    this.subtitulo = 'Configuração Cartão Credito';
    this.cartaoService.read().subscribe(cartao => {
      this.cartao = cartao
    })
  }
  public buscaCorretora(){
    this.cartao = [];
    this.contas = [];
    this.categoria = [];
    this.subtitulo = 'Configuração Corretora';
    this.contaService.read().subscribe(contas => {
      this.contas = contas
    })
  }
  public buscaCategoria(){
    this.cartao = [];
    this.contas = [];
    this.subtitulo = 'Configuração Categoria';
    this.categoriaService.read().subscribe(categoria => {
      this.categoria = categoria
    })
  }

  public buscaNotificacao(){
    this.cartao = [];
    this.contas = [];
    this.categoria = [];
    this.subtitulo = 'Configuração Categoria';
    this.contaService.read().subscribe(contas => {
      this.contas = contas
    })
  }

  executeDelete(contas : Conta): void {

    try{
      this.contaService.delete(contas.id).subscribe(() => {
        this.presentToast('Excluir','Contas excluido com sucesso!', 'success');
        const index = this.contas.indexOf(contas);
        this.contas.splice(index,1);
        // this.router.navigate(["/contas"]);
      });

    } catch (error){
      this.presentToast('Erro', 'Erro ao tentar apagar a Conta!', 'danger')

    }

  }

  async presentToast(header: string, msg: string, collor: string) {
    const toast = await this.toastCtrl.create({
      header: header,
      message: msg,
      color: collor,
      duration: 3000,
      position: 'top',
    });

    await toast.present();
  }

  async delete(contas: Conta) {
    const alert = await this.alertCtrl.create({
      header: 'Deletar?',
      message: `Deseja excluir o contato: ${contas.nome}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.executeDelete(contas);
          }
        }
      ]
    });

    alert.present();
  }


}
