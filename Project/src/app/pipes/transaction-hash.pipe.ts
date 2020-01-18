import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionHash'
})
export class TransactionHashPipe implements PipeTransform {
  transform(value: string, length: number = 25): string {
    return `${value.substr(0, length)}...`;
  }
}
