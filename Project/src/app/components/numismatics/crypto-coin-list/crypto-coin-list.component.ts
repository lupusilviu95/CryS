import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SimpleCoinModel } from '../../../models/simple-coin-model';
import { CryptoCoinService } from '../../../services/crypto-coin.service';

@Component({
  selector: 'app-crypto-coin-list',
  templateUrl: './crypto-coin-list.component.html',
  styleUrls: ['./crypto-coin-list.component.scss']
})
export class CryptoCoinListComponent implements OnInit {
  constructor(private cryptoCoinService: CryptoCoinService) {
  }

  coins: Array<SimpleCoinModel> = new Array<SimpleCoinModel>();

  displayedColumns: string[] = ['position', 'name', 'price', 'symbol'];
  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.cryptoCoinService.getCoins().pipe(
      flatMap(response => {
        response.results.bindings.forEach(coinModel => {
          this.coins.push(SimpleCoinModel.from(coinModel));
        });
        this.dataSource = new MatTableDataSource(this.coins);
        return of([]);
      })
    ).subscribe();

    // this.dataSource.sort = this.sort;
  }

}
