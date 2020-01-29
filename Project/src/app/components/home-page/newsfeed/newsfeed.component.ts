import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewsModel } from '../../../models/news-model';
import { SimpleNewsModel } from '../../../models/simple-news-model';

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
  @Input() showSymbols = true;
  @Input() pageSizeOptions = [25, 50];
  @Input() news: Array<SimpleNewsModel>;

  dataSource;
  displayedColumns: string[] = ['createDate', 'title'];
  expandedElement: NewsModel | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.news);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
