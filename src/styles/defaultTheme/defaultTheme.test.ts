import { defaultJssOptions, defaultTheme } from './defaultTheme';

describe('defaultTheme', () => {
  it('should return default JSS options', () => {
    expect(defaultJssOptions).toBeTruthy();
  });

  it('should return a default theme', () => {
    expect(defaultTheme).toBeTruthy();
  });
});
