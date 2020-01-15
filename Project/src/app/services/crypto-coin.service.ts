import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCryptoCoinsResult } from '../models/crypto-coin';
import { DataGeneratorService } from './data-generator.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoCoinService {
  private static API_URL = 'https://4cgsg07w3e.execute-api.eu-central-1.amazonaws.com/beta/coins';

  constructor(private http: HttpClient, private dataGeneratorService: DataGeneratorService) {
  }

  public getCoins(): Observable<GetCryptoCoinsResult> {
    return this.http.get<GetCryptoCoinsResult>(`${CryptoCoinService.API_URL}/`);
  }

  public getCoin(id: string): Observable<GetCryptoCoinsResult> {
    return this.http.get<GetCryptoCoinsResult>(`${CryptoCoinService.API_URL}/${id}`);
  }
}
