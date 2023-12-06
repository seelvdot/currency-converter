import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CurrencyModule } from './modules/currency/currency.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <app-header />
    <app-main-page />
  `,
})
export class AppComponent {}
