import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SimpleTransactionModel, SimpleTransactionsModel } from '../../../models/simple-transactions-model';
import { GetTransactionsResponse } from '../../../models/transactions-model';
import { TransactionsService } from '../../../services/transactions.service';

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
  @Input() showPaginator: true;
  @Input() pageSizeOptions = [25, 50];

  dataSource;
  displayedColumns: string[] = ['hash', 'dateTraded', 'amountUsd'];
  transactions: Array<SimpleTransactionModel> = new Array<SimpleTransactionModel>();
  expandedTransaction: SimpleTransactionModel | null;

  constructor(private transactionService: TransactionsService) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    if (this.coinSymbol) {
      this.transactionService.getTransactionsForCoin(this.coinSymbol).pipe(
        flatMap((response: GetTransactionsResponse) => {
          this.loadData(response);
          return of([]);
        })
      ).subscribe();
    } else {
      this.transactionService.getTransactions().pipe(
        flatMap(response => {
          this.loadData(response);
          return of([]);
        })
      ).subscribe();
    }
  }

  loadData(data: GetTransactionsResponse): void {
    this.transactions = SimpleTransactionsModel.from(data).transactions;
    this.dataSource = new MatTableDataSource(this.transactions);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

}
