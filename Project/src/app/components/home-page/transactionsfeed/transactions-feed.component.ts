import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SimpleTransactionModel, SimpleTransactionsModel } from '../../../models/simple-transactions-model';
import { TransactionsService } from '../../../services/transactions.service';
import { MatPaginator } from '@angular/material/paginator';

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
  dataSource;
  displayedColumns: string[] = ['hash', 'dateTraded', 'amountUsd'];
  transactions: Array<SimpleTransactionModel> = new Array<SimpleTransactionModel>();
  expandedTransaction: SimpleTransactionModel | null;

  constructor(private transactionService: TransactionsService) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.transactionService.getTransactions().pipe(
      flatMap(response => {
        this.transactions = SimpleTransactionsModel.from(response).transactions;
        this.dataSource = new MatTableDataSource(this.transactions);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
        return of([]);
      })
    ).subscribe();
  }

}
