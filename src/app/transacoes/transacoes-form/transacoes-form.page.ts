import { Component, OnInit } from '@angular/core';
import { Transacoes } from '../shared/transacoes';
import { TransacoesService } from '../service/transacoes.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transacoes-form',
  templateUrl: './transacoes-form.page.html',
  styleUrls: ['./transacoes-form.page.scss'],
})
export class TransacoesFormPage implements OnInit {

  title: string = 'Nova Transação';
  transacoes: Transacoes;

  msg: string ;
  header:string;
  collor:string;
  isToastOpen:boolean = false;


  constructor(
    private transacoesService: TransacoesService,
    private router: ActivatedRoute,
    private route: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.transacoes = new Transacoes();

    const idParam = this.router.snapshot.paramMap.get('id');
    if (idParam) {
      this.title = 'Editar contato';
      this.loadContact(parseInt(idParam));
    }
  }

  async loadContact(id: number) {
    this.transacoesService.readById(id).subscribe((transacoes) => {
      this.transacoes = transacoes;
    });
  }

  updateProduct(): void {
    this.transacoesService.update(this.transacoes).subscribe(() => {
      this.transacoesService.showMessage("Transacão atualizada com sucesso!");
      this.route.navigate(["/transacoes"]);
    });
  }

  save(): void {
    this.transacoes.valor = Number(String(this.transacoes.valor).replace(',', '.'))// aceitar virgula
    try {
      this.transacoesService.create(this.transacoes).subscribe(() => {
       this.presentToast('Sucesso', 'Produto criado!', 'success')
        this.route.navigate(['/transacoess'])//voltar para tela principal
      })

    } catch (error) {
      this.presentToast('Erro', 'Produto criado!', 'danger')
    }
  }

  setOpen(isOpen: boolean,header: string, msg: string, collor: string) {
    this.isToastOpen = isOpen;
  }

  cancel(): void {
    this.route.navigate(['/transacoes'])
  }

  async presentToast(header: string, msg: string, collor: string) {
    const toast = await this.toastCtrl.create({
      header:header,
      message: msg,
      color:collor,
      duration: 3000,
      position: 'top',
    });

    await toast.present();
  }





}
