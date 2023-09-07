import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.page.html',
  styleUrls: ['./meu-perfil.page.scss'],
})
export class MeuPerfilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showTabelaPreco(){
    this.router.navigate(['/configuracoes/tabela-preco'])
  }

  usuario = [{
    nome : "Heliton Silva",
    email: "helitondba@gmail.com",
    cpf:"06484714622",
    img:"/assets/fotoPessoa.jpeg"
  }]

}





