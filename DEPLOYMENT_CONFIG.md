# Deployment Configuration Guide

## Asset Path Normalization

This project uses environment-aware asset paths that work on both Vercel and GitHub Pages.

### How It Works

1. **Asset Helper**: `scripts/asset-helper.js` detects the deployment environment
2. **Dynamic Paths**: Images use `data-src` attributes that get resolved to correct paths
3. **Automatic Resolution**: JavaScript resolves paths on page load

### Environment Detection

- **GitHub Pages**: Detects `github.io` domain and extracts repository name
- **Vercel**: Uses root `/assets/` path
- **Local Development**: Uses root `/assets/` path

## Deployment Configurations

### Vercel Deployment

**vercel.json** (already configured):
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Asset Paths**: `/assets/hero.jpg`

### GitHub Pages Deployment

**Repository Settings**:
- Repository name: `WEB20` (or your repo name)
- GitHub Pages source: GitHub Actions

**Asset Paths**: `/WEB20/assets/hero.jpg` (automatically detected)

### Build Process

1. **Development**: `npm run build` → creates `dist/` with all assets
2. **Assets**: Copied from `public/assets/` to `dist/public/assets/`
3. **Path Resolution**: JavaScript handles environment-specific paths

## File Structure After Build

```
dist/
├── index.html
├── 404.html
├── scripts/
│   ├── asset-helper.js    # Environment detection
│   ├── config.js          # API configuration
│   ├── main.js            # Main application logic
│   └── ...
├── styles/
│   └── main.css
├── partials/
│   └── *.html
└── public/
    └── assets/
        ├── hero.jpg
        ├── hero.mp4
        └── ...
```

## Testing Asset Paths

### Local Testing
```bash
npm run build
npx serve dist
# Visit http://localhost:3000
# Assets should load from /assets/
```

### Vercel Testing
```bash
vercel --prod
# Assets should load from /assets/
```

### GitHub Pages Testing
```bash
# Deploy to GitHub Pages
# Assets should load from /REPO_NAME/assets/
```

## Troubleshooting

### Assets Not Loading
1. Check browser console for 404 errors
2. Verify asset files exist in `dist/public/assets/`
3. Check that `asset-helper.js` is loaded before `main.js`

### Wrong Asset Paths
1. Verify environment detection in browser console:
   ```javascript
   console.log(window.AssetHelper.getAssetBase());
   ```
2. Check that `data-src` attributes are being converted to `src`

### Case Sensitivity
- All asset references use lowercase: `hero.jpg`
- File system should match: `public/assets/hero.jpg`

## Manual Override

If automatic detection fails, you can manually set the base path:

```javascript
// In browser console
window.AssetHelper.manualBase = '/your-repo-name/';
window.AssetHelper.resolveAssetPaths();
```
