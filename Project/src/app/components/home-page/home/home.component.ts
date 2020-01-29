import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { GetNewsResult } from '../../../models/news-model';
import { SimpleNewsModel } from '../../../models/simple-news-model';
import { SimpleTransactionsModel } from '../../../models/simple-transactions-model';
import { NewsService } from '../../../services/news.service';
import { TransactionsService } from '../../../services/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: Array<SimpleNewsModel>;
  transactions: SimpleTransactionsModel;

  constructor(private newsService: NewsService,
              private transactionService: TransactionsService) { }

  ngOnInit() {
    this.loadTransactions();
    this.loadNews();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().pipe(
      flatMap(response => {
        this.transactions = SimpleTransactionsModel.from(response);
        return of([]);
      })).subscribe();
  }

  loadNews(): void {
    this.newsService.getAllNews().pipe(
      flatMap((newsResult: GetNewsResult) => {
        this.news = new Array<SimpleNewsModel>();
        newsResult.results.bindings.forEach(newsModel => {
          if (newsModel.description.value.length > 0 && newsModel.news.value.length > 0) {
            this.news.push(SimpleNewsModel.from(newsModel));
          }
        });
        return of([]);
      })).subscribe();
  }
}
