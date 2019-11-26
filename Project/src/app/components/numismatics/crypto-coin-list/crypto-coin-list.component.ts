import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-coin-list',
  templateUrl: './crypto-coin-list.component.html',
  styleUrls: ['./crypto-coin-list.component.scss']
})
export class CryptoCoinListComponent implements OnInit {
  cryptoCoins = [
    {
      "name" : 'Ethereum',
      "icon" : 'ethereum-2-256.png',
      "description" : 'Ethereum is a global, decentralized platform for money and new kinds of applications.'
    },
    {
      "name" : 'BitCoin',
      "icon" : 'bitcoin-256.png',
      "description" : 'Bitcoin is an innovative payment network and a new kind of money. Find all you need to know and get started with Bitcoin on bitcoin.org.'
    }
    ,{
      "name" : 'Ripple',
      "icon" : 'ripple-2-256.png',
      "description" : 'Ripple enables banks, payment providers, digital asset exchanges and corporates to send money globally using advanced blockchain technology.'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
