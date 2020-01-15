import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';
import { CryptoCoinModel } from '../../../models/crypto-coin';
import { CryptoCoinService } from '../../../services/crypto-coin.service';

@Component({
  selector: 'app-view-coin',
  templateUrl: './view-coin.component.html',
  styleUrls: ['./view-coin.component.scss']
})
export class ViewCoinComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private cryptoCoinService: CryptoCoinService) {
  }

  coin: CryptoCoinModel;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cryptoCoinService.getCoin(id).pipe(
      flatMap(response => {
        return response.results.bindings;
      }),
      first(),
      flatMap(coin => {
        this.coin = coin;
        console.log(this.coin);
        return of([]);
      })
    ).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
