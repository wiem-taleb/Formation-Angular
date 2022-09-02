import { BtcUsdPipe } from './btc-usd.pipe';

describe('BtcUsdPipe', () => {
  it('create an instance', () => {
    const pipe = new BtcUsdPipe();
    expect(pipe).toBeTruthy();
  });
});
