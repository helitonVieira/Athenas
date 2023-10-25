import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Cartao } from './cartao';
import { CartaoService } from './service/cartao.service';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.page.html',
  styleUrls: ['./cartao.page.scss'],
})
export class CartaoPage implements OnInit {

  searchTerm: String;
  cartao: Cartao[];
  textoBuscar = '';

  constructor(
    private cartaoService: CartaoService,
     private router: Router,
     private toastCtrl: ToastController,
     private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.cartaoService.read().subscribe(cartao => {
      this.cartao = cartao
    })
  }

  busca(event){
    this.textoBuscar = event.detail.value;
  }

  public novo(){
    this.router.navigate(['/cartao/new']);
  }

  executeDelete(cartao : Cartao): void {

    try{
      this.cartaoService.delete(cartao.id).subscribe(() => {
        this.presentToast('Excluir','Cartao excluido com sucesso!', 'success');
        const index = this.cartao.indexOf(cartao);
        this.cartao.splice(index,1);
        // this.router.navigate(["/cartao"]);
      });

    } catch (error){
      this.presentToast('Erro', 'Erro ao tentar apagar a Transação!', 'danger')

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

  async delete(cartao: Cartao) {
    const alert = await this.alertCtrl.create({
      header: 'Deletar?',
      message: `Deseja excluir o contato: ${cartao.nomCartao}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.executeDelete(cartao);
          }
        }
      ]
    });

    alert.present();
  }


}
