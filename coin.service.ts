import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from './coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private baseURL = "http://localhost:8090/coins";

  constructor(private httpClient: HttpClient) { }

  getCoinsList():Observable<Coin[]>{
    return this.httpClient.get<Coin[]>(`${this.baseURL}`);
  }

  createCoin(coin:Coin): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,coin);
  }
}
