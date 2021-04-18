import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sellers/pages/basics/basics.component';
import { NumbersComponent } from './sellers/pages/numbers/numbers.component';
import { NoCommonsComponent } from './sellers/pages/no-commons/no-commons.component';
import { OrdersComponent } from './sellers/pages/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent
  },
  {
    path: 'order',
    component: OrdersComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
