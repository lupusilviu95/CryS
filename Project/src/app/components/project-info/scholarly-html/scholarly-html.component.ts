import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarly-html',
  templateUrl: './scholarly-html.component.html',
  styleUrls: ['./scholarly-html.component.scss']
})
export class ScholarlyHtmlComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
