import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  nome: 'Heliton Vieira';

  public atributoConfig : boolean = false;


  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'bar-chart' },
    { title: 'Transações', url: '/transacoes', icon: 'code' },
    { title: 'Contas Bancarias', url: '/contas-bancarias', icon: 'business' },
    { title: 'Cartao de Credito', url: '/cartao-credito', icon: 'card' },
    { title: 'Planejamento Financeiro', url: '/planejamento-financeiro', icon: 'calendar' },
    { title: 'Calendario Financeiro', url: '/calendario-financeiro', icon: 'calendar-number' },
    { title: 'Tabela Preco', url: '/tabela-preco', icon: 'calendar-number' },
  ];

  public labels = [
    { title: 'Configurações', url: '/configuracoes', icon: 'settings' },
    { title: 'Central de Ajuda', url: '/central-ajuda', icon: 'help' },
  ];

  public showConfig(){
    this.router.navigate(['/configuracoes'])
  }

  public showAtributosConfig(){
    if (this.atributoConfig==true) {
      this.atributoConfig =false;
    } else {
      this.atributoConfig = true;
    }
  }

  public showMeuPerfil(){
    this.router.navigate(['/configuracoes/meu-perfil'])
  }

  public showConfiguracoes(){
    this.router.navigate(['/configuracoes'])
  }



  //public labels = ['Configura', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {}
}
