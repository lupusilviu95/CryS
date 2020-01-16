export interface GetCryptoCoinsResult {
  head: {
    vars: string[];
  };
  results: {
    bindings: CryptoCoinModel[];
  };
}

export interface CryptoCoinModel {
  symbol: CoinSymbol;
  circulating_supply: CirculatingSupply;
  website: Website;
  message_board: MessageBoard;
  cmc_rank: CmcRank;
  description: Description;
  mineable: Mineable;
  date_added: DateAdded;
  market_cap: MarketCap;
  percent_change_24h: PercentChange24h;
  price: Price;
  name: Name;
  explorer: Explorer;
  reddit: Reddit;
  logo: Logo;
  technical_doc: TechnicalDoc;
  id: Id;
  percent_change_7d: PercentChange7d;
  source_code: SourceCode;
  coin: Coin;
  status: Status;
  twitter: Twitter;
  chat: Chat;
  announcement: Announcement;
  platform: Platform;
}

export interface CoinSymbol {
  type: string;
  value: string;
}

export interface CirculatingSupply {
  datatype: string;
  type: string;
  value: string;
}

export interface Website {
  type: string;
  value: string;
}

export interface MessageBoard {
  type: string;
  value: string;
}

export interface CmcRank {
  datatype: string;
  type: string;
  value: string;
}

export interface Description {
  type: string;
  value: string;
}

export interface Mineable {
  type: string;
  value: string;
}

export interface DateAdded {
  datatype: string;
  type: string;
  value: Date;
}

export interface MarketCap {
  datatype: string;
  type: string;
  value: string;
}

export interface PercentChange24h {
  datatype: string;
  type: string;
  value: string;
}

export interface Price {
  datatype: string;
  type: string;
  value: string;
}

export interface Name {
  type: string;
  value: string;
}

export interface Explorer {
  type: string;
  value: string;
}

export interface Reddit {
  type: string;
  value: string;
}

export interface Logo {
  type: string;
  value: string;
}

export interface TechnicalDoc {
  type: string;
  value: string;
}

export interface Id {
  datatype: string;
  type: string;
  value: string;
}

export interface PercentChange7d {
  datatype: string;
  type: string;
  value: string;
}

export interface SourceCode {
  type: string;
  value: string;
}

export interface Coin {
  type: string;
  value: string;
}

export interface Status {
  type: string;
  value: string;
}

export interface Twitter {
  type: string;
  value: string;
}

export interface Chat {
  type: string;
  value: string;
}

export interface Announcement {
  type: string;
  value: string;
}

export interface Platform {
  type: string;
  value: string;
}
