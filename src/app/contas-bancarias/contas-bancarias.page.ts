import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { ContaService } from '../contas-bancarias/service/conta.service';
import { Conta } from '../contas-bancarias/conta';

@Component({
  selector: 'app-contas-bancarias',
  templateUrl: './contas-bancarias.page.html',
  styleUrls: ['./contas-bancarias.page.scss'],
})
export class ContasBancariasPage implements OnInit {
  searchTerm: String;
  contas: Conta[];
  textoBuscar = '';

  constructor(
    private contaService: ContaService,
     private router: Router,
     private toastCtrl: ToastController,
     private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.contaService.read().subscribe(contas => {
      this.contas = contas
    })
  }

  busca(event){
    this.textoBuscar = event.detail.value;
  }

  public novo(){
    this.router.navigate(['/contas-bancarias/new']);
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
