import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardItemOneComponent } from './card-item/card-item-one/card-item-one.component';
import { CardAddComponent } from './card-add/card-add.component';
import { HttpClientModule } from '@angular/common/http'
import { ICardApiServiceToken } from '../shared/interfaces/ICardApiService';
import { CardApiService } from '../shared/services/cardsApi.service';


@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardItemOneComponent,
    CardAddComponent,
  ],
  exports: [
    CardsComponent,
  ],
  providers: [
    {
      provide: ICardApiServiceToken, 
      useClass: CardApiService
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class CardModule { }
