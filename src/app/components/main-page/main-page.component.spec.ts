import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { CurrencyModule } from '../../modules/currency/currency.module';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      imports: [CurrencyModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render currency cards', () => {
    const compiled = fixture.nativeElement;
    component.currencies.forEach(currency => {
      expect(compiled.querySelector(`[data-testid="${currency.code}"]`)).toBeTruthy();
    });
  });
});
