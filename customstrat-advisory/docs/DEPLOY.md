# Deployment Guide for Custom Domain

This guide explains how to deploy your Next.js static site to GitHub Pages with a custom domain.

## Quick Deploy

1. **Build and deploy:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build your Next.js site (creates `out/` folder)
   - Copy all files from `out/` to the repository root
   - Create `.nojekyll` file (required for GitHub Pages)

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy website"
   git push
   ```

3. **Configure GitHub Pages:**
   - Go to your repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select "main" (or "master") branch and "/ (root)" folder
   - Save

4. **Set up Custom Domain:**
   - In the same Pages settings, add your custom domain
   - GitHub will create a `CNAME` file automatically
   - Update your DNS records as instructed by GitHub

## Manual Steps (Alternative)

If you prefer to do it manually:

1. Build the site:
   ```bash
   npm run build
   ```

2. Copy files from `customstrat-advisory/out/` to the repository root

3. Create `.nojekyll` file in the root (already created for you)

4. Commit and push

## Troubleshooting 404 Errors

If you're getting 404 errors:

1. **Check file locations:** Make sure `index.html` is in the repository root
2. **Verify `.nojekyll`:** This file must exist in the root to prevent Jekyll processing
3. **Check GitHub Pages settings:** Source should be set to root folder
4. **DNS propagation:** Custom domain changes can take up to 48 hours
5. **Clear browser cache:** Hard refresh (Ctrl+F5 or Cmd+Shift+R)

## File Structure After Deploy

```
repository-root/
├── index.html          ← Your homepage
├── about/
│   └── index.html
├── services/
│   └── index.html
├── _next/              ← Next.js assets
├── images/             ← Your images
├── .nojekyll           ← Required for GitHub Pages
└── ... (other files)
```

## Notes

- The `out/` folder is gitignored - it's only used during build
- After deploying, your built files will be in the repository root
- You can delete the files from root and rebuild anytime with `npm run deploy`
