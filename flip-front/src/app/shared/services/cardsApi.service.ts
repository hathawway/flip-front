import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../interfaces/card.interface";
import { ICardApiService } from "../interfaces/ICardApiService";

const host = 'http://tfs';

@Injectable()

export class CardApiService implements ICardApiService {
    
    constructor(private httpService: HttpClient) {}

    getAll(): Observable<Card[]> {
        return this.httpService.get<Card[]>(host)
    }

    add(card: Card): Observable<void> {
        return this.httpService.post<void>(host, card)
    }

    delete(card: Card): Observable<void> {
        return this.httpService.delete<void>(host, {params: {'id': `${card.id}`}})
    }

}