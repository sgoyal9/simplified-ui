import { AbbreviateNumberPipe } from "./abbreviate-number.pipe";

describe('ShortNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new AbbreviateNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
