import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SimpleTransactionModel, SimpleTransactionsModel } from '../../../models/simple-transactions-model';
import { TransactionsService } from '../../../services/transactions.service';

@Component({
  selector: 'app-transactionsfeed',
  templateUrl: './transactions-feed.component.html',
  styleUrls: ['./transactions-feed.component.scss']
})
export class TransactionsFeedComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['hash', 'amountUsd', 'sender', 'receiver'];
  transactions: Array<SimpleTransactionModel> = new Array<SimpleTransactionModel>();

  constructor(private transactionService: TransactionsService) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.transactionService.getTransactions().pipe(
      flatMap(response => {
        this.transactions = SimpleTransactionsModel.from(response).transactions;
        this.dataSource = new MatTableDataSource(this.transactions);
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
        return of([]);
      })
    ).subscribe();
  }

}
