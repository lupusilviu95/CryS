import { animate, state, style, transition, trigger } from '@angular/animations';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';
import { CryptoCoinModel, GetCryptoCoinsResult } from '../../../models/crypto-coin-model';
import { LineGraphData } from '../../../models/line-graph-data';
import { GetNewsResult, NewsModel } from '../../../models/news-model';
import { GetPredictionsResponse } from '../../../models/predictions-model';
import { GetPricesResponse } from '../../../models/prices-model';
import { SimpleCoinModel } from '../../../models/simple-coin-model';
import { SimpleNewsModel } from '../../../models/simple-news-model';
import { SimplePredictionsModel } from '../../../models/simple-predictions-model';
import { SimplePricesModel } from '../../../models/simple-prices-model';
import { SimpleTransactionsModel } from '../../../models/simple-transactions-model';
import { GetTransactionsResponse } from '../../../models/transactions-model';
import { CryptoCoinService } from '../../../services/crypto-coin.service';
import { NewsService } from '../../../services/news.service';
import { PredictionsService } from '../../../services/predictions.service';
import { PricesService } from '../../../services/prices.service';
import { TransactionsService } from '../../../services/transactions.service';

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
              private predictionsService: PredictionsService,
              private newsService: NewsService,
              private transactionsService: TransactionsService) {
  }
  schema: any;
  coinId: string;
  coin: SimpleCoinModel;
  pricesHistoryData: LineGraphData;
  predictionsData: LineGraphData;
  news: Array<SimpleNewsModel>;
  simpleTransactionsModel: SimpleTransactionsModel;

  ngOnInit() {
    this.coinId = this.route.snapshot.paramMap.get('id');
    this.cryptoCoinService.getCoin(this.coinId).pipe(
      flatMap((response: GetCryptoCoinsResult) => {
        return response.results.bindings;
      }),
      first(),
      flatMap((coin: CryptoCoinModel) => {
        this.coin = SimpleCoinModel.from(coin);
        this.schema = SimpleCoinModel.toSchema(this.coin);
        this.schema['@context'] = 'http://example.com/crys#';
        this.loadNews(this.coin.symbol);
        this.loadTransactions(this.coin.symbol);
        this.loadPredictions(this.coin.symbol);
        this.loadPriceHistory(this.coin.symbol);
        return of([]);
      })
    ).subscribe();
  }

  loadPredictions(coinSymbol: string): void {
    this.pricesService.getPriceHistory(coinSymbol, 0).pipe(
      flatMap((getPricesResponse: GetPricesResponse) => {
        this.pricesHistoryData = LineGraphData.fromPrices(SimplePricesModel.from(getPricesResponse));
        return of([]);
      })).subscribe();
  }

  loadPriceHistory(coinSymbol: string): void {
    this.predictionsService.getPrediction(coinSymbol, 7).pipe(
      flatMap((getPredictionsResponse: GetPredictionsResponse) => {
        this.predictionsData = LineGraphData.fromPredictions(SimplePredictionsModel.from(getPredictionsResponse));
        return of([]);
      })).subscribe();
  }

  loadTransactions(coinSymbol: string): void {
    this.transactionsService.getTransactionsForCoin(coinSymbol).pipe(
      flatMap((response: GetTransactionsResponse) => {
        this.simpleTransactionsModel = SimpleTransactionsModel.from(response);
        return of([]);
      })
    ).subscribe();
  }

  loadNews(coinSymbol: string): void {
    this.newsService.getNews(coinSymbol).pipe(
      flatMap((newsResult: GetNewsResult) => {
        this.news = new Array<SimpleNewsModel>();
        newsResult.results.bindings.forEach((newsModel: NewsModel) => {
          if (newsModel.description.value.length > 0 && newsModel.news.value.length > 0) {
            this.news.push(SimpleNewsModel.from(newsModel));
          }
        });
        return of([]);
      })).subscribe();
  }

  navigateBack() {
    this.location.back();
  }
}
