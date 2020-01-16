import { Injectable } from '@angular/core';
import { CryptoCoinModel } from '../models/crypto-coin-model';

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {

  constructor() { }

  public getCryptoCoin(): CryptoCoinModel {
    return {
      announcement: undefined,
      chat: undefined,
      circulating_supply: undefined,
      cmc_rank: undefined,
      coin: undefined,
      date_added: undefined,
      description: undefined,
      explorer: undefined,
      id: undefined,
      logo: undefined,
      market_cap: undefined,
      message_board: undefined,
      mineable: undefined,
      percent_change_24h: undefined,
      percent_change_7d: undefined,
      platform: undefined,
      reddit: undefined,
      source_code: undefined,
      status: undefined,
      symbol: undefined,
      technical_doc: undefined,
      twitter: undefined,
      website: undefined,
      name: undefined,
      price: undefined
    };
  }
}
