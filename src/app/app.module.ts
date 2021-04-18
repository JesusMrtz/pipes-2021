import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { SellersModule } from './sellers/sellers.module';

// Cambiar el local de la app
import localESMX from '@angular/common/locales/es-MX';
import localJA from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
import { from } from 'rxjs';

registerLocaleData(localESMX);
registerLocaleData(localJA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SellersModule,
    BrowserAnimationsModule
  ],
  providers: [
    // Registrar el idioma local de las fecha de manera global de la aplicación
    {
      provide: LOCALE_ID,
      useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
