export interface GetPricesResult {
  head: {
    vars: string[];
  };
  results: {
    bindings: PriceModel[];
  };
}

export interface AtDate {
  datatype: string;
  type: string;
  value: string;
}

export interface BelongsTo {
  type: string;
  value: string;
}

export interface Value {
  datatype: string;
  type: string;
  value: string;
}

export interface PriceHistory {
  type: string;
  value: string;
}

export interface PriceModel {
  at_date: AtDate;
  belongs_to: BelongsTo;
  value: Value;
  price_history: PriceHistory;
}
