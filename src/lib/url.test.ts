import { publicPath } from './url';

describe('publicPath', () => {
  it.each([
    ['/', '/'],
    ['/index.html', '/'],
    ['/imprint.html', '/imprint'],
    ['/imprint', '/imprint'],
    ['/404.html', '/404'],
  ])('maps %s to %s', (pathname, expected) => {
    expect(publicPath(pathname)).toBe(expected);
  });
});
