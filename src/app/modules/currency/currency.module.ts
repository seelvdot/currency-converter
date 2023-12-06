import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CardComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CurrencyModule { }
