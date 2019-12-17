import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CryptoCoinResponse} from '../models/crypto-coin';
import {DataGeneratorService} from './data-generator.service';

@Injectable({
  providedIn: 'root'
})
export class CryptocoinService {
  private dataGeneratorService: DataGeneratorService;

  constructor(dataGeneratorService: DataGeneratorService) {
    this.dataGeneratorService = dataGeneratorService;
  }

  public getCoins(): Observable<CryptoCoinResponse> {
    return new Observable<CryptoCoinResponse>(subscriber => this.dataGeneratorService.getCryptoCoin);
  }
}
