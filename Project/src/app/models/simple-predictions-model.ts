import { Builder } from 'builder-pattern';
import { GetPredictionsResponse, PredictionModel } from './predictions-model';

export class SimplePredictionsModel {
  predictions: Array<SimplePredictionModel> = new Array<SimplePredictionModel>();

  public static from(predictions: GetPredictionsResponse): SimplePredictionsModel {
    const simpleModel = new SimplePredictionsModel();
    predictions.results.bindings.forEach(price => {
      simpleModel.predictions.push(SimplePredictionModel.from(price));
    });
    return simpleModel;
  }
}

export class SimplePredictionModel {
  symbol: string;
  predictedPrice: string;
  generatedAt: string;
  prediction: string;
  predictedDate: string;

  public static from(prediction: PredictionModel): SimplePredictionModel {
    return Builder<SimplePredictionModel>()
      .symbol(prediction.symbol ? prediction.symbol.value : null)
      .predictedPrice(prediction.predicted_price ? prediction.predicted_price.value : null)
      .generatedAt(prediction.generated_at ? prediction.generated_at.value : null)
      .prediction(prediction.prediction ? prediction.prediction.value : null)
      .predictedDate(prediction.predicted_date ? prediction.predicted_date.value : null)
      .build();
  }
}
