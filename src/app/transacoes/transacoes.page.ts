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
      this.transacoesService.delete(transacoes.id).subscribe(() => {
      this.transacoesService.showMessage("Transacoes excluido com sucesso!");
      this.router.navigate(["/transacoes"]);
    });
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
