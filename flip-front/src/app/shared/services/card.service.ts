import { Inject, Injectable } from "@angular/core";
import { Card } from "../interfaces/card.interface";
import { ICardApiService, ICardApiServiceToken } from "../interfaces/ICardApiService";
import { FlipService } from "./flip.service";

@Injectable({
    providedIn: 'root'
})

export class CardService {

    private _cards: Card[] = [];

    constructor(@Inject(ICardApiServiceToken) private service: ICardApiService,
    public flipService: FlipService) {}

    get cards(): Card[] {
        return this._cards;
    }

    initiliaze(): void {
        this.service.getAll().subscribe( (cards) => {
            this._cards = cards; 
            
            this.cards.forEach( (value) => {
                let i = value.id;
                if (i === undefined) { return }
                if (this.flipService.storage.getItem(i)) {
                    value.flip = 'is-flipped';
                }
            }) 
        })        
    }

    addCard(card: Card): void {
        this.service.add(card).subscribe( () => {
            this.initiliaze()
        })
    }

    delCard(card: Card): void {
        this.service.delete(card).subscribe( () => {
            this.initiliaze();
        })
    }


}