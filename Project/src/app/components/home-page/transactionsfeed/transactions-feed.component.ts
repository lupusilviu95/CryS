import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SimpleTransactionModel, SimpleTransactionsModel } from '../../../models/simple-transactions-model';

@Component({
  selector: 'app-transactionsfeed',
  templateUrl: './transactions-feed.component.html',
  styleUrls: ['./transactions-feed.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class TransactionsFeedComponent implements OnInit {
  @Input() coinSymbol: string;
  @Input() pageSizeOptions = [25, 50];
  @Input() simpleTransactionsModel: SimpleTransactionsModel;

  dataSource;
  displayedColumns: string[] = ['hash', 'dateTraded', 'amountUsd'];
  expandedTransaction: SimpleTransactionModel | null;

  constructor() {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.simpleTransactionsModel.transactions);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
