# 🚀 Vercel Deployment Guide

## 📋 Prerequisites
- GitHub repository connected to Vercel
- Node.js 20+ support
- Vite build system

## 🔧 Automatic Deployment (Recommended)

### 1. Connect Repository to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `saaedimam/KTLBD`
4. Vercel will auto-detect the configuration

### 2. Configure Build Settings
Vercel will automatically detect these settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `project/dist`
- **Install Command**: `npm install && cd project && npm install`

### 3. Environment Variables (Optional)
No environment variables required for basic deployment.

## 🔄 Manual Deployment via GitHub Actions

### 1. Configure Repository Secrets
Add these secrets in your GitHub repository:
- Go to `Settings` → `Secrets and variables` → `Actions`
- Add the following secrets:

```
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_org_id_here
VERCEL_PROJECT_ID=your_project_id_here
```

### 2. Get Vercel Credentials
1. **VERCEL_TOKEN**: 
   - Go to Vercel Dashboard → Settings → Tokens
   - Create new token

2. **VERCEL_ORG_ID**:
   - Go to Vercel Dashboard → Settings → General
   - Copy Team ID

3. **VERCEL_PROJECT_ID**:
   - Go to your project in Vercel
   - Copy Project ID from URL or settings

### 3. Deploy
- Push to `main` branch triggers automatic deployment
- Or manually trigger from GitHub Actions tab

## 📁 Project Structure
```
/
├── vercel.json              # Vercel configuration
├── package.json             # Root package.json with scripts
├── project/                 # React application
│   ├── src/                # Source code
│   ├── dist/               # Build output (auto-generated)
│   └── package.json        # Project dependencies
└── .github/workflows/      # GitHub Actions
    ├── ci.yml              # CI workflow
    └── vercel-deploy.yml   # Vercel deployment workflow
```

## 🛠️ Build Commands

### Local Development
```bash
# Install all dependencies
npm install && cd project && npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Vercel Build Process
1. **Install**: `npm install && cd project && npm install`
2. **Build**: `npm run build`
3. **Output**: `project/dist/`
4. **Deploy**: Automatically to Vercel

## 🔍 Troubleshooting

### Build Failures
- Ensure Node.js 20+ is available
- Check that all dependencies are installed
- Verify `project/dist/` is generated after build

### Deployment Issues
- Check Vercel dashboard for build logs
- Verify repository secrets are configured
- Ensure `vercel.json` is in root directory

### Common Errors
- **"Build command failed"**: Check `npm run build` works locally
- **"Output directory not found"**: Verify `project/dist/` exists
- **"Framework not detected"**: Ensure `vercel.json` is present
- **"Missing script"**: Use direct install commands, not npm scripts

## 📊 Performance Optimization

### Bundle Analysis
- Build size: ~2.0MB
- Gzipped: ~76KB
- Assets optimized for production

### Caching
- Static assets cached for 1 year
- HTML files served fresh
- SPA routing configured

## 🎯 Success Indicators
- ✅ Build completes in <5 minutes
- ✅ `project/dist/` directory generated
- ✅ Vercel deployment successful
- ✅ Live URL accessible
- ✅ All assets loading correctly

## 🚀 Next Steps After Deployment
1. Configure custom domain (optional)
2. Set up environment variables (if needed)
3. Configure analytics and monitoring
4. Set up preview deployments for PRs

---

**Need Help?** Check Vercel documentation or GitHub Issues for support.