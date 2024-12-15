import { TemperatureConvertionPipe } from './temperature-convertion.pipe';

describe('TemperatureConvertionPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureConvertionPipe();
    expect(pipe).toBeTruthy();
  });
});
