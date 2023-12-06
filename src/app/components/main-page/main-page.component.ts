import { Component } from '@angular/core';
import { eCurrency } from '../../modules/currency/data/currency';

@Component({
  selector: 'app-main-page',
  template: `
    <div class="container">
      <div class="currency-group">
        @for (currency of currencies; track currency.code) {
        <app-card [currency]="currency" [attr.data-testid]="currency.code"></app-card>
        }
      </div>
    </div>
  `,
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  currencies = [
    {
      name: 'Dólar Canadense',
      code: eCurrency.CAD,
    },
    {
      name: 'Peso Argentino',
      code: eCurrency.ARS,
    },
    {
      name: 'Libra Esterlina',
      code: eCurrency.GBP,
    },
  ];
}
