import { Injectable } from '@angular/core';
import { CryptoCoinResponse } from '../models/crypto-coin';

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {

  constructor() { }

  public getCryptoCoin(): CryptoCoinResponse {
    return {
      name: 'Ethereum',
      price: 143.03,
      currency: '$',
      marketCap: '$15,579,295,366'
    };
  }
}
