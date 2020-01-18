export interface GetTransactionsResponse {
  head: {
    vars: string[];
  };
  results: {
    bindings: TransactionModel[];
  };
}

export interface TransactionModel {
  symbol: CoinSymbol;
  amount: Amount;
  receiver: Receiver;
  sender: Sender;
  amount_usd: AmountUsd;
  date_traded: DateTraded;
  hash: Hash;
}

export interface CoinSymbol {
  type: string;
  value: string;
}

export interface Amount {
  datatype: string;
  type: string;
  value: string;
}

export interface Receiver {
  type: string;
  value: string;
}

export interface Sender {
  type: string;
  value: string;
}

export interface AmountUsd {
  datatype: string;
  type: string;
  value: string;
}

export interface DateTraded {
  datatype: string;
  type: string;
  value: Date;
}

export interface Hash {
  type: string;
  value: string;
}
