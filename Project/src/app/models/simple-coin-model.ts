import { Builder } from 'builder-pattern';
import { CryptoCoinModel } from './crypto-coin-model';

export class SimpleCoinModel {
  symbol: string;
  circulatingSupply: string;
  website: string;
  messageBoard: string;
  cmcRank: string;
  description: string;
  mineable: string;
  dateAdded: Date;
  marketCap: string;
  percentChange24h: string;
  price: string;
  name: string;
  explorer: string;
  reddit: string;
  logo: string;
  technicalDoc: string;
  id: string;
  percentChange7d: string;
  sourceCode: string;
  coin: string;
  status: string;
  twitter: string;
  chat: string;
  announcement: string;
  platform: string;

  public static from(coinModel: CryptoCoinModel): SimpleCoinModel {
    return Builder<SimpleCoinModel>()
      .symbol(coinModel.symbol ? coinModel.symbol.value : null)
      .circulatingSupply(coinModel.circulating_supply ? coinModel.circulating_supply.value : null)
      .website(coinModel.website ? coinModel.website.value : null)
      .messageBoard(coinModel.message_board ? coinModel.message_board.value : null)
      .cmcRank(coinModel.cmc_rank ? coinModel.cmc_rank.value : null)
      .description(coinModel.description ? coinModel.description.value : null)
      .mineable(coinModel.mineable ? coinModel.mineable.value : null)
      .dateAdded(coinModel.date_added ? coinModel.date_added.value : null)
      .marketCap(coinModel.market_cap ? coinModel.market_cap.value : null)
      .percentChange24h(coinModel.percent_change_24h ? coinModel.percent_change_24h.value : null)
      .price(coinModel.price ? coinModel.price.value : null)
      .name(coinModel.name ? coinModel.name.value : null)
      .explorer(coinModel.explorer ? coinModel.explorer.value : null)
      .reddit(coinModel.reddit ? coinModel.reddit.value : null)
      .logo(coinModel.logo ? coinModel.logo.value : null)
      .technicalDoc(coinModel.technical_doc ? coinModel.technical_doc.value : null)
      .id(coinModel.id ? coinModel.id.value : null)
      .percentChange7d(coinModel.percent_change_7d ? coinModel.percent_change_7d.value : null)
      .sourceCode(coinModel.source_code ? coinModel.source_code.value : null)
      .coin(coinModel.coin ? coinModel.coin.value : null)
      .status(coinModel.status ? coinModel.status.value : null)
      .twitter(coinModel.twitter ? coinModel.twitter.value : null)
      .chat(coinModel.chat ? coinModel.chat.value : null)
      .announcement(coinModel.announcement ? coinModel.announcement.value : null)
      .platform(coinModel.platform ? coinModel.platform.value : null)
      .build();
  }
}
