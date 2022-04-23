import { Inject, Injectable } from "@angular/core";
import { Card } from "../interfaces/card.interface";
import { ICardApiService, ICardApiServiceToken } from "../interfaces/ICardApiService";

@Injectable({
    providedIn: 'root'
})

export class FlipService {

    private _storage = window.localStorage;

    constructor(@Inject(ICardApiServiceToken) private service: ICardApiService) {
    }

    get storage() {
        return this._storage;
    }

    add(value: Card) {
        document.getElementById(`${value.id}`)?.classList.add('is-flipped');
    }

    remove(value: Card) {
        document.getElementById(`${value.id}`)?.classList.remove('is-flipped'); 
    }

    flipOneCard(value: Card) {
        if (!this.storage.getItem(`${value.id}`)) {
            this.storage.setItem(`${value.id}`, 'true')
            this.add(value)
        } else {
            this.storage.removeItem(`${value.id}`)
            this.remove(value)
        }
    }

    flipAllCard(value: Card[]) {
        value.forEach( (v) => {
            this.add(v)
            this.remove(v)
        })
        this.storage.clear()
    }

}