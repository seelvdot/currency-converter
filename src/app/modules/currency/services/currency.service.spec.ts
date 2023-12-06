import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ICurrency, eCurrency } from '../data/currency';
import { of } from 'rxjs';

describe('CurrencyService', () => {
  let service: CurrencyService;
  let httpClient: any;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        CurrencyService,
        { provide: HttpClient, useValue: httpClient }
      ]
    });
    service = TestBed.inject(CurrencyService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should call get with the correct URL when getCurrency is called', () => {
    const mockResponse = [{
      code:"ARS",
      codein:"BRL",
      name:"Peso Argentino/Real Brasileiro",
      high:0.0136,
      low:0.0135,
      varBid:"0",
      pctChange:0,
      bid:0.0136,
      ask:0.0136,
      timestamp:"1701826149",
      create_date:"2023-12-05 22:29:09"
    } as ICurrency];

    httpClient.get.and.returnValue(of(mockResponse));
    const currency = eCurrency.ARS;
    service.getCurrency(currency);
    expect(httpClient.get).toHaveBeenCalledWith(`${service.url}/${currency}`);
  });
});
