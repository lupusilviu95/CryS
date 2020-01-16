export interface GetPredictionsResult {
  head: {
    vars: string[];
  };
  results: {
    bindings: PredictionModel[];
  };
}

export interface PredictionSymbol {
  type: string;
  value: string;
}

export interface PredictedPrice {
  datatype: string;
  type: string;
  value: string;
}

export interface GeneratedAt {
  datatype: string;
  type: string;
  value: string;
}

export interface Prediction {
  type: string;
  value: string;
}

export interface PredictedDate {
  datatype: string;
  type: string;
  value: string;
}

export interface PredictionModel {
  symbol: PredictionSymbol;
  predicted_price: PredictedPrice;
  generated_at: GeneratedAt;
  prediction: Prediction;
  predicted_date: PredictedDate;
}



