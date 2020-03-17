import { DateToColorPipe } from './date-to-color.pipe';

describe('DateToColorPipe', () => {
  it('create an instance', () => {
    const pipe: DateToColorPipe = new DateToColorPipe();
    expect(pipe).toBeTruthy();
  });
});
