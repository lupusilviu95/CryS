import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SimpleCoinModel } from '../../../models/simple-coin-model';
import { PriceChangePipeMode } from '../../../pipes/price-change-pipe-mode.enum';
import { CryptoCoinService } from '../../../services/crypto-coin.service';
import { SimpleTransactionModel } from "../../../models/simple-transactions-model";

@Component({
  selector: 'app-crypto-coin-list',
  templateUrl: './crypto-coin-list.component.html',
  styleUrls: ['./crypto-coin-list.component.scss']
})
export class CryptoCoinListComponent implements OnInit {
  @Input() pageSizeOptions = [15, 30, 50];

  constructor(private cryptoCoinService: CryptoCoinService) {
  }

  pipeModeIcon = PriceChangePipeMode.ICON;
  coinsLoaded = false;
  coins: Array<SimpleCoinModel> = new Array<SimpleCoinModel>();

  displayedColumns: string[] = ['cmcRank', 'name', 'symbol', 'marketCap', 'price', 'circulatingSupply', 'percent_change_24h'];
  dataSource;
  schema: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.cryptoCoinService.getCoins().pipe(
      flatMap(response => {
        response.results.bindings.forEach(coinModel => {
          this.coins.push(SimpleCoinModel.from(coinModel));
        });
        this.addCoinsToSchema(this.coins);
        this.dataSource = new MatTableDataSource(this.coins);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.coinsLoaded = true;
        return of([]);
      })
    ).subscribe();
  }

  initSchema(): void {
    if (!this.schema) {
      const schema: any = {};
      schema['@context'] = 'http://example.com/crys#';
      schema['@type'] = 'array';
      this.schema = schema;
    }
  }

  addCoinsToSchema(coins: Array<SimpleCoinModel>): void {
    this.initSchema();
    this.schema.items = [];
    coins.forEach((coin: SimpleCoinModel) => {
      this.schema.items.push(SimpleCoinModel.toSchema(coin));
    });
  }
}
