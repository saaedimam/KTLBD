/**
 * Asset Path Helper
 * Provides environment-aware asset paths for both Vercel and GitHub Pages
 */

// Detect deployment environment
function getAssetBase() {
  // Check if we're on GitHub Pages (has repository name in path)
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    // Extract repository name from URL path
    const pathParts = window.location.pathname.split('/');
    const repoName = pathParts[1]; // First part after domain
    return `/${repoName}/assets/`;
  }
  
  // Default to root assets for Vercel and local development
  return '/assets/';
}

// Get asset path with environment awareness
function getAssetPath(assetName) {
  const base = getAssetBase();
  return `${base}${assetName}`;
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.AssetHelper = {
    getAssetPath,
    getAssetBase
  };
}

// For Node.js environments (build process)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getAssetPath,
    getAssetBase
  };
}
