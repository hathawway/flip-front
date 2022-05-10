import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/card.interface';
import { CardService } from 'src/app/shared/services/card.service';
import { FlipService } from 'src/app/shared/services/flip.service';

@Component({
  selector: 'app-card-item-one',
  templateUrl: './card-item-one.component.html',
  styleUrls: ['./card-item-one.component.less']
})
export class CardItemOneComponent implements OnInit {

  @Input() card!: Card;
  @Output() delete = new EventEmitter<Card>()
  @Output() flip = new EventEmitter<Card>()
  
  constructor(public cardsService: CardService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.delete.next(this.card)
  }

  onFlip(): void {
    this.flip.next(this.card)
  }
  
}
