import { Component, OnInit } from '@angular/core';
import { Transacoes } from './shared/transacoes';
import { TransacoesService } from './service/transacoes.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.page.html',
  styleUrls: ['./transacoes.page.scss'],
})
export class TransacoesPage implements OnInit {

  searchTerm: String;
  transacoes: Transacoes[];
  textoBuscar = '';

  constructor(
    private transacoesService: TransacoesService,
     private router: Router,
     private toastCtrl: ToastController,
     private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.transacoesService.read().subscribe(transacoes => {
      this.transacoes = transacoes
    })
  }

  busca(event){
    this.textoBuscar = event.detail.value;
  }

  public novo(){
    this.router.navigate(['/transacoes/transacoes-form']);
  }

  executeDelete(transacoes : Transacoes): void {

    try{
      this.transacoesService.delete(transacoes.id).subscribe(() => {
        this.presentToast('Excluir','Transacoes excluido com sucesso!', 'success');
        const index = this.transacoes.indexOf(transacoes);
        this.transacoes.splice(index,1);
        // this.router.navigate(["/transacoes"]);
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

  async delete(transacoes: Transacoes) {
    const alert = await this.alertCtrl.create({
      header: 'Deletar?',
      message: `Deseja excluir o contato: ${transacoes.descricao}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.executeDelete(transacoes);
          }
        }
      ]
    });

    alert.present();
  }


}
