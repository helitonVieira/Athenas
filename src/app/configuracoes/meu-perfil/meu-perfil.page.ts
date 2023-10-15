import { ToastController } from '@ionic/angular';
import { PerfilServiceService } from './service/perfil-service.service';
import { Perfil } from './service/perfil';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.page.html',
  styleUrls: ['./meu-perfil.page.scss'],
})
export class MeuPerfilPage implements OnInit {

  title: string = 'Meu Perfil';
  perfil: Perfil;

  msg: string;
  header: string;
  collor: string;
  isToastOpen: boolean = false;

  constructor(
    private perfilService: PerfilServiceService,
    private router: ActivatedRoute,
    private route: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
   this.perfil = new Perfil();
   const idParam = "1";
    //const idParam = this.router.snapshot.paramMap.get('id');ok

    if (idParam) {
      this.title = 'Editar Perfil';
      this.loadContact(parseInt(idParam));
    }
  }

  async loadContact(id: number) {
    this.perfilService.readById(id).subscribe((perfil) => {
      this.perfil = perfil;
    });
  }

  updateProduct(): void {
    //this.perfil.valor = Number(String(this.perfil.valor).replace(',', '.'))// aceitar virgula
    try {
    this.perfilService.update(this.perfil).subscribe(() => {
      this.presentToast('Sucesso', 'Perfil alterada!', 'success')
        this.route.navigate(['/perfils'])//voltar para tela principal
      })
    } catch (error) {
      this.presentToast('Erro', 'Perfil edit!', 'danger')
    }
  }

  create(): void {
    //create
   // this.perfil.valor = Number(String(this.perfil.valor).replace(',', '.'))// aceitar virgula
    try {
      this.perfilService.create(this.perfil).subscribe(() => {
        this.presentToast('Sucesso', 'Perfil criada!', 'success')
        this.route.navigate(['/perfils'])//voltar para tela principal
      })
    } catch (error) {
      this.presentToast('Erro', 'Erro ao tentar criar a Perfil!', 'danger')
    }
  }

  save(): void {

    if (this.perfil.id > 0) {
      this.updateProduct();
    } else {
      this.create();
    }
  }

  setOpen(isOpen: boolean, header: string, msg: string, collor: string) {
    this.isToastOpen = isOpen;
  }

  cancel(): void {
    this.route.navigate(['/perfil'])
  }

  showTabelaPreco(){
    this.route.navigate(['/configuracoes/tabela-preco']);
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
