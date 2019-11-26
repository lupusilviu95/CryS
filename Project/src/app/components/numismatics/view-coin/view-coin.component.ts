import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-view-coin',
  templateUrl: './view-coin.component.html',
  styleUrls: ['./view-coin.component.scss']
})
export class ViewCoinComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
