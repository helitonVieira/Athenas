import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {

  constructor(public toastCtrl: ToastController) { }

 /* showMessage2(header: string , msg: string, collor: string): void {
    const toast =  this.toastCtrl.create({
      header: header,
      message: msg,
      color: collor,
      position: 'bottom',
      duration: 3000
    });

    toast.present();
  }*/



}
