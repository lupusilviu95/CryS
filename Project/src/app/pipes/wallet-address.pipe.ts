import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'walletAddress'
})
export class WalletAddressPipe implements PipeTransform {

  transform(value: string, length: number = 64): string {
    return value.split('#')[1].substr(0, length);
  }

}
