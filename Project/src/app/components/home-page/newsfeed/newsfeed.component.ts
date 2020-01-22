import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { GetNewsResult, NewsModel } from '../../../models/news-model';
import { SimpleNewsModel } from '../../../models/simple-news-model';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class NewsfeedComponent implements OnInit {
  @Input() coinSymbol: string;
  @Input() showPaginator: true;
  @Input() pageSizeOptions = [25, 50];

  dataSource;
  displayedColumns: string[] = ['Title', 'Date'];
  news: Array<SimpleNewsModel> = new Array<SimpleNewsModel>();
  expandedElement: NewsModel | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    if (this.coinSymbol) {
      this.newsService.getNews(this.coinSymbol).pipe(
        flatMap((newsResult: GetNewsResult) => {
          this.loadData(newsResult);
          return of([]);
        })
      ).subscribe();
    } else {
      this.newsService.getAllNews().pipe(
        flatMap((newsResult: GetNewsResult) => {
          this.loadData(newsResult);
          return of([]);
        })
      ).subscribe();
    }
  }

  loadData(newsData: GetNewsResult): void {
    newsData.results.bindings.forEach(newsModel => {
      if (newsModel.description.value.length > 0 && newsModel.news.value.length > 0) {
        this.news.push(SimpleNewsModel.from(newsModel));
      }
    });
    this.dataSource = new MatTableDataSource(this.news);
    this.dataSource.paginator = this.paginator;
  }
}
