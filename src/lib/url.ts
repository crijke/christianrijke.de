/**
 * Maps a build-time pathname to its public URL path. With `build.format: 'file'`, pages are
 * emitted as `/index.html` and `/imprint.html` but served as `/` and `/imprint`.
 */
export function publicPath(pathname: string): string {
  return pathname.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '') || '/';
}
