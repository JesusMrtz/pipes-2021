import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {
  // i18nSelect
  name = 'Jesús';
  gender = 'masculino';
  invitationMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  // i18nPlural
  clients: string[] = ['María', 'Pedro', 'Jesús', 'Karely'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    other:  'tenemos # clientes esperando'
  };

  // keyValuePipe
  person = {
    name: 'Jesús',
    lastName: 'Martínez',
    city: 'Mérida'
  };

  // jsonPipe
  valueObj = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  // async pipe
  myObservable = interval(1000);
  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  changeName(): void {
    if ( this.gender === 'masculino' ) {
      this.gender = 'femenino';
      this.name = 'Karely';
    } else {
      this.gender = 'masculino';
      this.name = 'Jesús';
    }
  }

  removeClients(): void {
    this.clients.pop();
  }
}
