import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  nameLower = 'jesús';
  nameUpper = 'JESÚS';
  completeName = 'jEsÚS MartínEz';
  date: Date = new Date();

  constructor() { }

}
