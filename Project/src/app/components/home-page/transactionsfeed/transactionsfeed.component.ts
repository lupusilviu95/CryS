import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-transactionsfeed',
  templateUrl: './transactionsfeed.component.html',
  styleUrls: ['./transactionsfeed.component.scss']
})
export class TransactionsfeedComponent implements OnInit {
  transactionDate = moment().format("HH:mm")
  transactionData = [
    {hash: 'd10846ef2f77a24643f388713890bf1ad10436909ec48c599c28c440ed3b801a', time: this.transactionDate, amountBtc: '0.01921035 BTC',  amountUsd: '138,06 USD'},
    {hash: '1ae289d17796ac72ac5ddebde291c5028c273fda895444615b16928ca64a0f90', time: this.transactionDate, amountBtc: '0.06098340 BTC',  amountUsd: '438,29 USD'},
    {hash: '41df534ac97e841fc1d673c82cec451fc3071ccd1083639707a117c29fdd849c', time: this.transactionDate, amountBtc: '0.00969522 BTC',  amountUsd: '69,68 USD'},
    {hash: 'dfafbf6297321ef19309d993495e3e7bb9217922c94b536a6eca59c4e1ee475a', time: this.transactionDate, amountBtc: '0.01609733 BTC',  amountUsd: '115,69 USD'},
    {hash: '5f3ba6dce3ade18e17d9b1ae1d8b36409d96e34d7ffaa41e7660fdb2f3aa8938', time: this.transactionDate, amountBtc: '0.99471260 BTC',  amountUsd: '7.148,96 USD'},
    {hash: 'cfb74f31b6860d570609a72028d89153ee2ccc45d546c71f04143e6cddb9fe4a', time: this.transactionDate, amountBtc: '1.42603047 BTC',  amountUsd: '10.240,70 USD'},
    {hash: '7a915c4e2ec64665e389d4153d6cd99830cfd2850c165ddf1b06cc8cb8693a54', time: this.transactionDate, amountBtc: '0.00506552 BTC',  amountUsd: '36,38 USD'},
    {hash: '0fdb897f80c4b85b7136a80354fc3a094f8148a60679d2cde6143f74046ae75f', time: this.transactionDate, amountBtc: '0.00873559 BTC',  amountUsd: '62,73 USD'},
    {hash: '67895ee296c41dd86be428278e9520f7f0d10d30bfe6a02dde6c4f8a9cfee9ab', time: this.transactionDate, amountBtc: '0.01252054 BTC',  amountUsd: '89,91 USD'},
    {hash: '59422dcf2858e55f8621d6bf67412d40a75d746f955fd05cd91d6a04d6f3edff', time: this.transactionDate, amountBtc: '2.31302034 BTC',  amountUsd: '16.610,40 USD'},
  ];

  displayedColumns: string[] = ['hash', 'time', 'amountBtc', 'amountUsd'];
  dataSource = this.transactionData;

  constructor() {
    this.transactionData = this.transactionData.concat(this.transactionData);
    this.transactionData = this.transactionData.concat(this.transactionData);
  }

  ngOnInit() {
  }

}
