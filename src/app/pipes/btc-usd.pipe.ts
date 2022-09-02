import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcUsd',
})
export class BtcUsdPipe implements PipeTransform {
  transform(amount: number, isBtcUsd = true): number {
    if (isBtcUsd) return amount * 20265;
    return amount / 20265;
  }
}
