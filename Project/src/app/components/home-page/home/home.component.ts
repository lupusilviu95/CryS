import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { GetNewsResult } from '../../../models/news-model';
import { SimpleNewsModel } from '../../../models/simple-news-model';
import { SimpleTransactionModel, SimpleTransactionsModel } from '../../../models/simple-transactions-model';
import { NewsService } from '../../../services/news.service';
import { TransactionsService } from '../../../services/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: Array<SimpleNewsModel>;
  simpleTransactionsModel: SimpleTransactionsModel;
  schema: any;

  constructor(private newsService: NewsService,
              private transactionService: TransactionsService) { }

  ngOnInit() {
    this.loadTransactions();
    this.loadNews();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().pipe(
      flatMap(response => {
        this.simpleTransactionsModel = SimpleTransactionsModel.from(response);
        this.addTransactionsToSchema(this.simpleTransactionsModel.transactions);
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
        this.addNewsToSchema(this.news);
        return of([]);
      })).subscribe();
  }

  initSchema(): void {
    if (!this.schema) {
      const schema: any = {};
      schema['@context'] = 'http://example.com/crys#';
      schema['@type'] = 'NewsAndTransactions';
      this.schema = schema;
    }
  }

  addTransactionsToSchema(transactions: Array<SimpleTransactionModel>): void {
    this.initSchema();
    const transactionsSchema: any = {};
    transactionsSchema['@type'] = 'array';
    transactionsSchema.items = [];
    transactions.forEach((transaction: SimpleTransactionModel) => {
      transactionsSchema.items.push(SimpleTransactionModel.toSchema(transaction));
    });
    this.schema.transactions = transactionsSchema;
  }

  addNewsToSchema(news: Array<SimpleNewsModel>): void {
    this.initSchema();
    const newsSchema: any = {};
    newsSchema['@type'] = 'array';
    newsSchema.items = [];
    news.forEach((newsArticle: SimpleNewsModel) => {
      newsSchema.items.push(SimpleNewsModel.toSchema(newsArticle));
    });
    this.schema.news = newsSchema;
  }
}
