import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'bar-chart' },
    { title: 'Transações', url: '/transacoes', icon: 'logo-usd' },
    { title: 'Contas Bancarias', url: '/contasBancarias', icon: 'business' },
    { title: 'Cartao de Credito', url: '/cartaCredito', icon: 'card' },
    { title: 'Planejamento Financeiro', url: '/planejamentoFinanceiro', icon: 'calendar' },
    { title: 'Calendario Financeiro', url: '/calendarioFinanceiro', icon: 'calendar-number' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
