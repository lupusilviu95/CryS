import { Pipe, PipeTransform } from '@angular/core';
import { PriceChangePipeMode } from './price-change-pipe-mode.enum';

@Pipe({
  name: 'appPriceChange'
})
export class PriceChangePipe implements PipeTransform {
  transform(value: string, mode: number = PriceChangePipeMode.COLOR): string {
    if (mode === PriceChangePipeMode.ICON) {
      return this.getIcon(value);
    } else {
      return this.getColor(value);
    }
  }

  private getColor(value: string): string {
    if (Number(value) > 0) {
      return '#4caf50';
    } else if (Number(value) === 0) {
      return '#f5f5f5';
    } else {
      return '#f44336';
    }
  }

  private getIcon(value: string): string {
    if (Number(value) > 0) {
      return 'caret up';
    } else if (Number(value) === 0) {
      return 'caret right';
    } else {
      return 'caret down';
    }
  }
}
