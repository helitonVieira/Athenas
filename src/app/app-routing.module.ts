import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

  {  path: 'transacoes', loadChildren: () => import('./transacoes/transacoes.module').then( m => m.TransacoesPageModule)},
  {  path: 'transacoes/new', loadChildren: () => import('./transacoes/transacoes-form/transacoes-form.module').then( m => m.TransacoesFormPageModule)},
  {  path: 'transacoes/edit/:id', loadChildren: () => import('./transacoes/transacoes-form/transacoes-form.module').then( m => m.TransacoesFormPageModule)},

  {  path: 'contas-bancarias', loadChildren: () => import('./contas-bancarias/contas-bancarias.module').then( m => m.ContasBancariasPageModule)},
  {  path: 'contas-bancarias/new', loadChildren: () => import('./contas-bancarias/conta-form/conta/conta.module').then( m => m.ContaPageModule)},
  {  path: 'contas-bancarias/edit/:id', loadChildren: () => import('./contas-bancarias/conta-form/conta/conta.module').then( m => m.ContaPageModule)},

  {  path: 'cartao-credito', loadChildren: () => import('./cartao/cartao.module').then( m => m.CartaoPageModule)},
  {  path: 'cartao/new', loadChildren: () => import('./cartao/form-cartao/form-cartao.module').then( m => m.FormCartaoPageModule)},
  {  path: 'cartao/edit/:id', loadChildren: () => import('./cartao/form-cartao/form-cartao.module').then( m => m.FormCartaoPageModule)},

  {  path: 'categoria', loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)},
  {  path: 'categoria/new', loadChildren: () => import('./categoria/form-categoria/form-categoria.module').then( m => m.FormCategoriaPageModule)},
  {  path: 'categoria/edit/:id', loadChildren: () => import('./categoria/form-categoria/form-categoria.module').then( m => m.FormCategoriaPageModule)},

  /*{
    path: 'contas-bancarias',
    loadChildren: () => import('./contas-bancarias/contas-bancarias.module').then( m => m.ContasBancariasPageModule)
  },*/

  {
    path: 'planejamento-financeiro',
    loadChildren: () => import('./planejamento-financeiro/planejamento-financeiro.module').then( m => m.PlanejamentoFinanceiroPageModule)
  },
  {
    path: 'calendario-financeiro',
    loadChildren: () => import('./calendario-financeiro/calendario-financeiro.module').then( m => m.CalendarioFinanceiroPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'cartao',
    loadChildren: () => import('./cartao/cartao.module').then( m => m.CartaoPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
