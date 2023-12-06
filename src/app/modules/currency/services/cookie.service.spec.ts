import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';

describe('CookieService', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
  });

  it('should set cookie correctly', () => {
    service.setCookie('test', 'value', 1);
    expect(document.cookie).toContain('test=value');
  });

  it('should get cookie correctly', () => {
    document.cookie = 'test=value';
    const cookie = service.getCookie('test');
    expect(cookie).toBe('value');
  });

  it('should delete cookie correctly', () => {
    document.cookie = 'test=value';
    service.deleteCookie('test');
    expect(document.cookie).not.toContain('test=value');
  });
});
