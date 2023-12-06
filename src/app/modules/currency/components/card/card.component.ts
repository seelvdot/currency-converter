import { Component, Input, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { ICurrency, eCurrency } from '../../data/currency';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() currency!: { name: string; code: string };
  currencyData!: ICurrency;
  minutes = 3;

  error = false;
  loading = false;

  constructor(
    private currencyService: CurrencyService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    if (this.currency) {
      this.verifyLocalStorage();
      setInterval(() => {
        this.verifyLocalStorage();
      }, 60000 * this.minutes);
    }
  }

  loadCurrency() {
    this.error = false;
    this.loading = true;
    if (this.currency) {
      this.currencyService.getCurrency(this.currency.code).subscribe({
        next: (response: any) => {
          this.loading = false;
          if (response) {
            this.currencyData = response[0] as ICurrency;
            this.cookieService.setCookie(
              this.currency.code,
              JSON.stringify(this.currencyData),
              this.minutes
            );
          } else {
            this.error = true;
          }
        },
        error: () => {
          this.loading = false;
          this.error = true;
        },
      });
    }
  }

  verifyLocalStorage() {
    const currencyData = this.cookieService.getCookie(this.currency.code);

    if (currencyData) {
      this.currencyData = JSON.parse(currencyData);
    } else {
      this.loadCurrency();
    }
  }
}
