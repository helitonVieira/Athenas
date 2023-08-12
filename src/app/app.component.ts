import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'bar-chart' },
    { title: 'Transações', url: '/transacoes', icon: 'code' },
    { title: 'Contas Bancarias', url: '/contas-bancarias', icon: 'business' },
    { title: 'Cartao de Credito', url: '/cartao-credito', icon: 'card' },
    { title: 'Planejamento Financeiro', url: '/planejamento-financeiro', icon: 'calendar' },
    { title: 'Calendario Financeiro', url: '/calendario-financeiro', icon: 'calendar-number' },   
  ];

  public labels = [
    { title: 'Configurações', url: '/configuracoes', icon: 'settings' },
    { title: 'Central de Ajuda', url: '/central-ajuda', icon: 'help' },
  ];
  //public labels = ['Configura', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
