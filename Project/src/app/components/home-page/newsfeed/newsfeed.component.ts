import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  newsList = [
    {
      "coins": ['BTC', 'ADA'],
      "title": 'Cardano’s Charles Hoskinson Asserts Bitcoin Will Hit $100k After FUD And Manipulation Clears Out',
      "body": 'The last few days haven’t been particularly smooth for the crypto market. The market took an expected' +
        ' hit following some news that Chinese authorities had raided an office alleged to belong to Binance. Binance' +
        ' has since moved to deny the claims and said that it will be pursuing legal redress against TheBlock' +
        ' for spreading the […]'
    },
    {
      "coins": ['BTC'],
      "title": 'Bitcoin Primed for a Move to $8,000, but Bear Trend Isn’t Over Yet',
      "body": ''
    },
    {
      "coins": ['BTC'],
      "title": 'Ben Goertzel and Richard Heart talk all things AI, Longevity tech research, medicine, & blockchain',
      "body": ''
    },
    {
      "coins": [],
      "title": 'OKEx Secures Support From Four New Partners for Its Utility Token OKB',
      "body": ''
    },
    {
      "coins": ['XTZ'],
      "title": 'The Tezos ecosystem is massive – and its bakers are spreading the word',
      "body": ''
    }];



  constructor() {
    this.newsList = this.newsList.concat(this.newsList);
    this.newsList = this.newsList.concat(this.newsList);
    this.newsList = this.newsList.concat(this.newsList);
  }

  ngOnInit() {
  }

}
