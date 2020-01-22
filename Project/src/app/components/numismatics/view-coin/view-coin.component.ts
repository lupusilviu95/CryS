import { animate, state, style, transition, trigger } from '@angular/animations';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';
import { CryptoCoinModel, GetCryptoCoinsResult } from '../../../models/crypto-coin-model';
import { GetNewsResult, NewsModel } from '../../../models/news-model';
import { SimpleCoinModel } from '../../../models/simple-coin-model';
import { CryptoCoinService } from '../../../services/crypto-coin.service';
import { NewsService } from '../../../services/news.service';
import { SimpleNewsModel } from "../../../models/simple-news-model";

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
              private newsService: NewsService) {
  }

  coin: CryptoCoinModel;
  news: Array<SimpleNewsModel> = new Array<SimpleNewsModel>();
  displayedColumns: string[] = ['Title'];
  dataSource;
  expandedElement: NewsModel | null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cryptoCoinService.getCoin(id).pipe(
      flatMap((response: GetCryptoCoinsResult) => {
        return response.results.bindings;
      }),
      first(),
      flatMap((coin: CryptoCoinModel) => {
        this.coin = coin;
        return this.newsService.getNews(this.coin.symbol.value);
      }),
      flatMap((newsResult: GetNewsResult) => {
        newsResult.results.bindings.forEach(newsModel => {
          if (newsModel.description.value.length > 0 && newsModel.news.value.length > 0) {
            console.log('about: ' + newsModel.about.value);
            this.news.push(SimpleNewsModel.from(newsModel));
          }
        });
        this.dataSource = this.news;
        return of([]);
      })
    ).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
