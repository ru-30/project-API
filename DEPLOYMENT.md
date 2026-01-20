# 🚀 Deployment Guide

## Quick Deploy to Vercel

Vercel is the recommended platform for deploying this Next-gen React application.

### Step 1: Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `ru-30/project-API`
4. Select main branch

### Step 2: Configure Project Settings

Vercel will auto-detect this is a Vite project. No additional configuration needed!

**Default settings are perfect:**
- Framework: Vite
- Root Directory: ./
- Build Command: `npm run build`
- Output Directory: `dist`

### Step 3: Deploy

Click "Deploy" and Vercel will:
1. Install dependencies
2. Run `npm run build`
3. Deploy the `dist` folder
4. Provide a live URL

### Step 4: Enable Auto-Deploy

Once deployed, every push to main branch automatically redeploys!

---

## Environment Variables (if needed)

If you need environment variables:

1. Go to Project Settings → Environment Variables
2. Add variables:
   ```
   VITE_API_BASE_URL=https://dummyjson.com
   ```

---

## Manual Deployment to Any Host

### Build Locally
```bash
npm install
npm run build
```

This creates a `dist/` folder ready to deploy.

### Deploy `dist/` folder to:
- **Netlify** - Drop folder or connect Git
- **GitHub Pages** - Push dist folder
- **AWS S3** - Upload to bucket
- **Any HTTP server** - Copy files to web root

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules .next
npm install
npm run build
```

### Port Issues
Vercel assigns the port automatically. No action needed.

### Performance Issues
- Check bundle size: `npm run build`
- Optimize images in recipes
- Use React DevTools Profiler

---

## Live Deployment Status

After deployment, your app will be available at:
```
https://your-project-name.vercel.app
```

Test the deployment:
1. Visit the URL
2. Test login with: emilys / emilyspass
3. Browse recipes
4. Create/edit/delete recipes on dashboard
5. Test search and filtering
6. Verify responsive design on mobile

---

## Monitoring & Updates

### View Deployment Logs
1. Vercel Dashboard → Your Project
2. Go to Deployments tab
3. Click on any deployment to see logs

### Automatic Updates
- Every git push to main branch = auto deploy
- Deployments take ~2 minutes
- Old deployments available for rollback

---

## Security Checklist

- [x] No secrets in code
- [x] API uses HTTPS
- [x] JWT tokens in localStorage
- [x] Environment variables configured
- [x] CORS enabled for DummyJSON API

---

## Performance Optimization

Your production build includes:
- ✅ Minified JavaScript (~250KB gzipped)
- ✅ Optimized CSS
- ✅ Tree-shaking of unused code
- ✅ Source maps for debugging
- ✅ Gzip compression

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **GitHub**: Check project issues

---

**Estimated Deploy Time**: 2-5 minutes
**No Configuration Required**: Vercel auto-detects Vite setup
