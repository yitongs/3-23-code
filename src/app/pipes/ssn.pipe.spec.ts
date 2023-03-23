import { SSNPipe } from './ssn.pipe';

describe('SSNPipe', () => {
  it('create an instance', () => {
    const pipe = new SSNPipe();
    expect(pipe).toBeTruthy();
  });
});
