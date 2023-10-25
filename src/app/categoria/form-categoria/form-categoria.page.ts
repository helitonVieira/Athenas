import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Categoria } from '../categoria';
import { CategoriaService } from '../service/categoria.service';


@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.page.html',
  styleUrls: ['./form-categoria.page.scss'],
})
export class FormCategoriaPage implements OnInit {

  title: string = 'Nova Categoria Bancaria';
  categoria: Categoria;

  msg: string;
  header: string;
  collor: string;
  isToastOpen: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private router: ActivatedRoute,
    private route: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
   this.categoria = new Categoria();

    const idParam = this.router.snapshot.paramMap.get('id');
    if (idParam) {
      this.title = 'Editar contato';
      this.loadContact(parseInt(idParam));
    }
  }

  async loadContact(id: number) {
    this.categoriaService.readById(id).subscribe((categoria) => {
      this.categoria = categoria;
    });
  }

  updateProduct(): void {

    try {
    this.categoriaService.update(this.categoria).subscribe(() => {
      this.presentToast('Sucesso', 'Trasação alterada!', 'success')
        this.route.navigate(['/transacoess'])//voltar para tela principal
      })
    } catch (error) {
      this.presentToast('Erro', 'Transação edit!', 'danger')
    }
  }

  create(): void {
    //create

    try {
      this.categoriaService.create(this.categoria).subscribe(() => {
        this.presentToast('Sucesso', 'Transação criada!', 'success')
        this.route.navigate(['/transacoess'])//voltar para tela principal
      })
    } catch (error) {
      this.presentToast('Erro', 'Erro ao tentar criar a Transação!', 'danger')
    }
  }

  save(): void {

    if (this.categoria.id > 0) {
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
