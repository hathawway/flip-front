import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "./card.interface";


export const ICardApiServiceToken = new InjectionToken('ICardApiService')

export interface ICardApiService {

    getAll(): Observable<Card[]>;
    add(card: Card): Observable<void>;
    delete(card: Card | undefined): Observable<void>

}