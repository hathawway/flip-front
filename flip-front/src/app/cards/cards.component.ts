import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/interfaces/card.interface';
import { CardService } from '../shared/services/card.service';
import { FlipService } from '../shared/services/flip.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {

  constructor(public cardsService: CardService) { }

  ngOnInit(): void {
  }

  addCard(value: Card) {
    this.cardsService.addCard(value)
  }
  
}
