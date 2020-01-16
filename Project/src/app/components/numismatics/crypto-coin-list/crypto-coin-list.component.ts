import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { CryptoCoinModel, GetCryptoCoinsResult } from '../../../models/crypto-coin-model';
import { CryptoCoinService } from '../../../services/crypto-coin.service';

@Component({
  selector: 'app-crypto-coin-list',
  templateUrl: './crypto-coin-list.component.html',
  styleUrls: ['./crypto-coin-list.component.scss']
})
export class CryptoCoinListComponent implements OnInit {
  cryptoCoins = [
    {
      name : 'Ethereum',
      icon : 'ethereum-2-256.png',
      description : 'Ethereum is a global, decentralized platform for money and new kinds of applications.'
    },
    {
      name : 'BitCoin',
      icon : 'bitcoin-256.png',
      description : 'Bitcoin is an innovative payment network and a new kind of money. ' +
        'Find all you need to know and get started with Bitcoin on bitcoin.org.'
    }
    , {
      name : 'Ripple',
      icon : 'ripple-2-256.png',
      description : 'Ripple enables banks, payment providers,' +
        ' digital asset exchanges and corporates to send money globally using advanced blockchain technology.'
    },
  ];
  constructor(private cryptoCoinService: CryptoCoinService) { }

  coins: CryptoCoinModel[];

  ngOnInit() {
    this.cryptoCoinService.getCoins().pipe(
      flatMap(response => {
        this.coins = response.results.bindings;
        console.log(this.coins);
        return of([]);
      })
    ).subscribe();
  }

}
