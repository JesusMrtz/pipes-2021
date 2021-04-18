import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/sellers.interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [
  ]
})
export class OrdersComponent {
  isMayus = true;
  orderBy = 'name';
  heroes: Heroes[] = [
    {
      name: 'Superman',
      flying: true,
      color: Color.azul
    },
    {
      name: 'Batman',
      flying: false,
      color: Color.negro
    },
    {
      name: 'Robin',
      flying: false,
      color: Color.verde
    },
    {
      name: 'Spiderman',
      flying: true,
      color: Color.rojo
    },
    {
      name: 'Dardevil',
      flying: false,
      color: Color.rojo
    },
  ];
  copyHeroes: Heroes[] = [...this.heroes];

  changeOrder(value: string): void {
    this.orderBy = value;
  }
}
