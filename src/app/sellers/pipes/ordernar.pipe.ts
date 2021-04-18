import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/sellers.interfaces';

@Pipe({
  name: 'ordernar'
})
export class OrdernarPipe implements PipeTransform {

  transform(heroes: Heroes[], order: string = 'name'): Heroes[] {
    if (order === 'name') {
      return heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (order === 'flying' ) {
      return heroes.sort((a, b) => (a.flying > b.flying) ? -1 : 1);
    }

    return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
  }

}
