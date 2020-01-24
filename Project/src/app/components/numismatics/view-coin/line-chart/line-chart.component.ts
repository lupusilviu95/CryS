import { Component, Input, OnInit } from '@angular/core';
import { LineData, LineGraphData } from '../../../../models/line-graph-data';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {


  @Input() graphData: LineGraphData;
  @Input() view: any[] = [700, 300];
  @Input() legend = false;
  @Input() animations = true;
  @Input() xAxis = true;
  @Input() yAxis = true;
  @Input() showYAxisLabel = false;
  @Input() showXAxisLabel = false;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
