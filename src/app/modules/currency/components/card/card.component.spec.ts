import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from '../../services/currency.service';
import { CookieService } from '../../services/cookie.service';
import { ICurrency, eCurrency } from '../../data/currency';
import { of } from 'rxjs';

describe('CardComponent', () => {
  let component: CardComponent;
  let currencyService: any;
  let cookieService: any;

  beforeEach(() => {
    currencyService = jasmine.createSpyObj('CurrencyService', ['getCurrency']);
    cookieService = jasmine.createSpyObj('CookieService', ['setCookie', 'getCookie']);

    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [
        CardComponent,
        { provide: CurrencyService, useValue: currencyService },
        { provide: CookieService, useValue: cookieService },
      ],
    });

    component = TestBed.inject(CardComponent);
    currencyService = TestBed.inject(CurrencyService);
    cookieService = TestBed.inject(CookieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCurrency and setCookie when loadCurrency is called', () => {
    const mockResponse = [
      {
        code: 'ARS',
        codein: 'BRL',
        name: 'Peso Argentino/Real Brasileiro',
        high: 0.0136,
        low: 0.0135,
        varBid: '0',
        pctChange: 0,
        bid: 0.0136,
        ask: 0.0136,
        timestamp: '1701826149',
        create_date: '2023-12-05 22:29:09',
      } as ICurrency,
    ];

    currencyService.getCurrency.and.returnValue(of(mockResponse));
    component.currency = { code: eCurrency.ARS, name: 'Peso Argentino' };
    component.loadCurrency();
    expect(currencyService.getCurrency).toHaveBeenCalledWith(eCurrency.ARS);
    expect(cookieService.setCookie).toHaveBeenCalledWith(
      eCurrency.ARS,
      JSON.stringify(mockResponse[0]),
      component.minutes
    );
  });

  it('should call getCookie and loadCurrency when verifyLocalStorage is called', () => {
    const mockResponse = null;
    cookieService.getCookie.and.returnValue(mockResponse);
    spyOn(component, 'loadCurrency');
    component.currency = { code: eCurrency.ARS, name: 'Peso Argentino' };
    component.verifyLocalStorage();
    expect(cookieService.getCookie).toHaveBeenCalledWith(eCurrency.ARS);
    expect(component.loadCurrency).toHaveBeenCalled();
  });
});
