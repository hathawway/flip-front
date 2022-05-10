import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/card.interface';
import { CardService } from 'src/app/shared/services/card.service';
import { FlipService } from 'src/app/shared/services/flip.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.less']
})
export class CardItemComponent implements OnInit {

  constructor(public cardsService: CardService,
    public flipService: FlipService) { }

  ngOnInit(): void {
    this.cardsService.initiliaze()
  }

  delCard(value: Card): void {
    this.cardsService.delCard(value)
  }

  flipCard(value: Card) {
    this.flipService.flipOneCard(value)
  }

  flipAll(value: Card[]) {
    this.flipService.flipAllCard(value)
  }

}
