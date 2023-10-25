import { Component, OnInit } from '@angular/core';
import { Conta } from '../../conta';
import { ContaService } from '../../service/conta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  title: string = 'Nova Conta Bancaria';
  conta: Conta;

  msg: string;
  header: string;
  collor: string;
  isToastOpen: boolean = false;

  constructor(
    private contaService: ContaService,
    private router: ActivatedRoute,
    private route: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
   this.conta = new Conta();

    const idParam = this.router.snapshot.paramMap.get('id');
    if (idParam) {
      this.title = 'Editar contato';
      this.loadContact(parseInt(idParam));
    }
  }

  async loadContact(id: number) {
    this.contaService.readById(id).subscribe((conta) => {
      this.conta = conta;
    });
  }

  updateProduct(): void {
    this.conta.saldoInicial = Number(String(this.conta.saldoInicial).replace(',', '.'))// aceitar virgula
    try {
    this.contaService.update(this.conta).subscribe(() => {
      this.presentToast('Sucesso', 'Trasação alterada!', 'success')
        this.route.navigate(['/transacoess'])//voltar para tela principal
      })
    } catch (error) {
      this.presentToast('Erro', 'Transação edit!', 'danger')
    }
  }

  create(): void {
    //create
    this.conta.saldoInicial = Number(String(this.conta.saldoInicial).replace(',', '.'))// aceitar virgula
    try {
      this.contaService.create(this.conta).subscribe(() => {
        this.presentToast('Sucesso', 'Transação criada!', 'success')
        this.route.navigate(['/transacoess'])//voltar para tela principal
      })
    } catch (error) {
      this.presentToast('Erro', 'Erro ao tentar criar a Transação!', 'danger')
    }
  }

  save(): void {

    if (this.conta.id > 0) {
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
