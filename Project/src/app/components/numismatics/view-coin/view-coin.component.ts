import { animate, state, style, transition, trigger } from '@angular/animations';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';
import { CryptoCoinModel, GetCryptoCoinsResult } from '../../../models/crypto-coin-model';
import { LineGraphData } from '../../../models/line-graph-data';
import { GetPredictionsResponse } from '../../../models/predictions-model';
import { GetPricesResponse } from '../../../models/prices-model';
import { SimpleCoinModel } from '../../../models/simple-coin-model';
import { SimpleNewsModel } from '../../../models/simple-news-model';
import { SimplePredictionsModel } from '../../../models/simple-predictions-model';
import { SimplePricesModel } from '../../../models/simple-prices-model';
import { CryptoCoinService } from '../../../services/crypto-coin.service';
import { PredictionsService } from '../../../services/predictions.service';
import { PricesService } from '../../../services/prices.service';

@Component({
  selector: 'app-view-coin',
  templateUrl: './view-coin.component.html',
  styleUrls: ['./view-coin.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ViewCoinComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private cryptoCoinService: CryptoCoinService,
              private pricesService: PricesService,
              private predictionsService: PredictionsService) {
  }

  coin: SimpleCoinModel;
  pricesHistoryData: LineGraphData;
  predictionsData: LineGraphData;
  news: Array<SimpleNewsModel> = new Array<SimpleNewsModel>();

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cryptoCoinService.getCoin(id).pipe(
      flatMap((response: GetCryptoCoinsResult) => {
        return response.results.bindings;
      }),
      first(),
      flatMap((coin: CryptoCoinModel) => {
        this.coin = SimpleCoinModel.from(coin);
        return this.pricesService.getPriceHistory(this.coin.symbol, 0);
      }),
      flatMap((getPricesResponse: GetPricesResponse) => {
        this.pricesHistoryData = LineGraphData.fromPrices(SimplePricesModel.from(getPricesResponse));
        return this.predictionsService.getPrediction(this.coin.symbol, 7);
      }),
      flatMap((getPredictionsResponse: GetPredictionsResponse) => {
        this.predictionsData = LineGraphData.fromPredictions(SimplePredictionsModel.from(getPredictionsResponse));
        return of([]);
      })
    ).subscribe();
  }
}
