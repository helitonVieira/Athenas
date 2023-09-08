import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrozz'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo : any[], texto: string, coluna: string): any[] {

     if( texto === ''){
      return arreglo;
     }

     texto = texto.toLowerCase();

     return arreglo.filter( item => {
      return item[coluna].toLowerCase()
      .includes( texto );
     });
  }

}
