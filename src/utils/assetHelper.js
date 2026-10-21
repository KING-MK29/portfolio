/**
 * Resolves static public assets (images, PDFs, 3D models) with the correct base path.
 * Works seamlessly in both local development ('/') and GitHub Pages production ('/portfolio/').
 *
 * @param {string} path - Relative or root-relative path (e.g. '/assets/my_image.jpg' or 'assets/my_image.jpg')
 * @returns {string} - Properly prefixed path for browser consumption
 */
export function getAssetUrl(path) {
  if (!path) return '';

  // Return unchanged if already an absolute HTTP(S) URL or data/blob URI
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  // Get base from Vite (e.g., '/portfolio/', '/', or './')
  const base = import.meta.env.BASE_URL || '/';

  // Strip leading slashes or dots from path (e.g. '/assets/img.jpg' -> 'assets/img.jpg')
  const cleanPath = path.replace(/^\.?\/+/, '');

  // Normalize base URL to ensure trailing slash
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  return `${cleanBase}${cleanPath}`;
}
