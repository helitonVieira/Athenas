import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracoesPage } from './configuracoes.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesPage
  },
  {
    path: 'meu-perfil',
    loadChildren: () => import('./meu-perfil/meu-perfil.module').then( m => m.MeuPerfilPageModule)
  },
  {
    path: 'tabela-preco',
    loadChildren: () => import('./tabela-preco/tabela-preco.module').then( m => m.TabelaPrecoPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta-bancaria/conta/conta.module').then( m => m.ContaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracoesPageRoutingModule {}
