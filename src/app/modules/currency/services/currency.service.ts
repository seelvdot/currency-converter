import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { eCurrency } from '../data/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url = 'https://economia.awesomeapi.com.br/json/';

  constructor(private httpClient: HttpClient) { }

  getCurrency(currency: string) {
    return this.httpClient.get(`${this.url}/${currency}`);
  }
}
