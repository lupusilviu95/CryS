import {CryptoCoinModel} from './crypto-coin-model';

export class SimpleCoinModel {
  symbol: string;
  circulating_supply: string;
  website: string;
  message_board: string;
  cmc_rank: string;
  description: string;
  mineable: string;
  date_added: string;
  market_cap: string;
  percent_change_24h: string;
  price: string;
  name: string;
  explorer: string;
  reddit: string;
  logo: string;
  technical_doc: string;
  id: string;
  percent_change_7d: string;
  source_code: string;
  coin: string;
  status: string;
  twitter: string;
  chat: string;
  announcement: string;
  platform: string;

  public from(coinModel: CryptoCoinModel): SimpleCoinModel {
    const simpleCoinModel: SimpleCoinModel = Builder<SimpleCoinModel>()
      .platform(coinModel.platform.value);

    return simpleCoinModel;
  }
}
