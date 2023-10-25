import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Cartao } from '../cartao';
import { CartaoService } from '../service/cartao.service';

@Component({
  selector: 'app-form-cartao',
  templateUrl: './form-cartao.page.html',
  styleUrls: ['./form-cartao.page.scss'],
})
export class FormCartaoPage implements OnInit {

  title: string = 'Nova Cartao Bancaria';
  cartao: Cartao;

  msg: string;
  header: string;
  collor: string;
  isToastOpen: boolean = false;

  constructor(
    private cartaoService: CartaoService,
    private router: ActivatedRoute,
    private route: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
   this.cartao = new Cartao();

    const idParam = this.router.snapshot.paramMap.get('id');
    if (idParam) {
      this.title = 'Editar contato';
      this.loadContact(parseInt(idParam));
    }
  }

  async loadContact(id: number) {
    this.cartaoService.readById(id).subscribe((cartao) => {
      this.cartao = cartao;
    });
  }

  updateProduct(): void {
    this.cartao.limiteCartaoCred = Number(String(this.cartao.limiteCartaoCred).replace(',', '.'))// aceitar virgula
    try {
    this.cartaoService.update(this.cartao).subscribe(() => {
      this.presentToast('Sucesso', 'Trasação alterada!', 'success')
        this.route.navigate(['/transacoess'])//voltar para tela principal
      })
    } catch (error) {
      this.presentToast('Erro', 'Transação edit!', 'danger')
    }
  }

  create(): void {
    //create
    this.cartao.limiteCartaoCred = Number(String(this.cartao.limiteCartaoCred).replace(',', '.'))// aceitar virgula
    try {
      this.cartaoService.create(this.cartao).subscribe(() => {
        this.presentToast('Sucesso', 'Transação criada!', 'success')
        this.route.navigate(['/transacoess'])//voltar para tela principal
      })
    } catch (error) {
      this.presentToast('Erro', 'Erro ao tentar criar a Transação!', 'danger')
    }
  }

  save(): void {

    if (this.cartao.id > 0) {
      this.updateProduct();
    } else {
      this.create();
    }
  }

  setOpen(isOpen: boolean, header: string, msg: string, collor: string) {
    this.isToastOpen = isOpen;
  }

  cancel(): void {
    this.route.navigate(['/contas-bancarias'])
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
}

