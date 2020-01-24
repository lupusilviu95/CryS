import { Builder } from 'builder-pattern';
import { GetPricesResponse, PriceModel } from './prices-model';

export class SimplePricesModel {
  prices: Array<SimplePriceModel> = new Array<SimplePriceModel>();

  public static from(prices: GetPricesResponse): SimplePricesModel {
    const simpleModel = new SimplePricesModel();
    prices.results.bindings.forEach(price => {
      simpleModel.prices.push(SimplePriceModel.from(price));
    });
    return simpleModel;
  }
}

export class SimplePriceModel {
  atDate: string;
  belongsTo: string;
  value: string;
  priceHistory: string;

  public static from(price: PriceModel): SimplePriceModel {
    return Builder<SimplePriceModel>()
      .atDate(price.at_date ? price.at_date.value : null)
      .belongsTo(price.belongs_to ? price.belongs_to.value : null)
      .value(price.value ? price.value.value : null)
      .priceHistory(price.price_history ? price.price_history.value : null)
      .build();
  }
}
