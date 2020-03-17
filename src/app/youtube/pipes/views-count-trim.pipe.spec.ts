import { CountTrimPipe } from './views-count-trim.pipe';

describe('CountTrimPipe', () => {
  it('create an instance', () => {
    const pipe: CountTrimPipe = new CountTrimPipe();
    expect(pipe).toBeTruthy();
  });
});
