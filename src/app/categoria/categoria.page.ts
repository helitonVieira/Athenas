import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Categoria } from './categoria';
import { CategoriaService } from './service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  searchTerm: String;
  categoria: Categoria[];
  textoBuscar = '';

  constructor(
    private categoriaService: CategoriaService,
     private router: Router,
     private toastCtrl: ToastController,
     private alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.categoriaService.read().subscribe(categoria => {
      this.categoria = categoria
    })
  }

  busca(event){
    this.textoBuscar = event.detail.value;
  }

  public novo(){
    this.router.navigate(['/categoria/new']);
  }

  executeDelete(categoria : Categoria): void {

    try{
      this.categoriaService.delete(categoria.id).subscribe(() => {
        this.presentToast('Excluir','Categoria excluido com sucesso!', 'success');
        const index = this.categoria.indexOf(categoria);
        this.categoria.splice(index,1);
        // this.router.navigate(["/categoria"]);
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

  async delete(categoria: Categoria) {
    const alert = await this.alertCtrl.create({
      header: 'Deletar?',
      message: `Deseja excluir o contato: ${categoria.descricao}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.executeDelete(categoria);
          }
        }
      ]
    });

    alert.present();
  }


}
