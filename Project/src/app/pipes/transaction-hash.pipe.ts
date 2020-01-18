import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionHash'
})
export class TransactionHashPipe implements PipeTransform {
  transform(value: string, length: number = 64): string {
    const substr = value.substr(0, length);
    return [substr.slice(0, length / 2), substr.slice(length / 2, length + 1)].join(' ');
  }
}
