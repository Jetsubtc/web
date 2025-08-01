# 🚀 Axie Cord Website Deployment Guide

Complete step-by-step guide to deploy your Axie Cord website from local development to your custom domain.

## 📋 Prerequisites

- ✅ Node.js installed
- ✅ Git installed
- ✅ GitHub account
- ✅ Vercel account (free)
- ✅ Custom domain (ready to configure)

## 🎯 Quick Start (Automated)

### Option 1: Use the Deployment Script
```bash
# Run the automated deployment script
./deploy.sh
```

### Option 2: Manual Steps (Recommended)

## 📁 Step 1: Prepare Your Project

### 1.1 Check Current Status
```bash
# Make sure you're in the project directory
pwd
# Should show: /Users/sithu/Downloads/Launchpad project

# Check if git is initialized
ls -la | grep .git
```

### 1.2 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Axie Cord website ready for deployment"
```

## 🔗 Step 2: Connect to GitHub

### 2.1 Add Remote Repository
```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/Jetsubtc/web.git
```

### 2.2 Push to GitHub
```bash
# Set main as default branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### 2.3 Verify on GitHub
- Go to https://github.com/Jetsubtc/web
- You should see all your files uploaded
- Check that the repository is public (for Vercel deployment)

## 🚀 Step 3: Deploy to Vercel

### 3.1 Connect Vercel to GitHub
1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your repository: `Jetsubtc/web`

### 3.2 Configure Project Settings
- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3.3 Deploy
1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at: `https://web-xxx.vercel.app`

## 🌐 Step 4: Configure Custom Domain

### 4.1 Add Domain in Vercel
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `axiecord.com`)
4. Vercel will show you DNS configuration

### 4.2 Configure DNS Settings
Based on your domain provider, add these DNS records:

#### For Cloudflare:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

#### For GoDaddy/Namecheap:
```
Type: A
Name: @
Value: 76.76.19.19
```

#### For Google Domains:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

### 4.3 Verify Domain
1. Wait 5-10 minutes for DNS propagation
2. Vercel will automatically provision SSL certificate
3. Your site will be live at your custom domain

## 🔧 Step 5: Final Configuration

### 5.1 Environment Variables (if needed)
- Go to Vercel Dashboard → Settings → Environment Variables
- Add any required environment variables

### 5.2 Custom Headers (Optional)
- The `vercel.json` file already includes security headers
- No additional configuration needed

### 5.3 Performance Optimization
- Vercel automatically optimizes images
- CDN is enabled by default
- Edge functions are configured

## 📱 Step 6: Test Everything

### 6.1 Test Your Website
- Visit your custom domain
- Test all pages and functionality
- Check mobile responsiveness
- Verify all images load correctly

### 6.2 Performance Check
- Use Google PageSpeed Insights
- Check Core Web Vitals
- Verify SEO meta tags

## 🔄 Step 7: Future Updates

### 7.1 Automatic Deployment
- Every push to `main` branch triggers automatic deployment
- Vercel creates preview deployments for pull requests

### 7.2 Manual Deployment
```bash
# Make changes locally
git add .
git commit -m "Update website content"
git push origin main
# Vercel automatically deploys
```

## 🛠️ Troubleshooting

### Common Issues:

#### 1. Build Fails
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

#### 2. Domain Not Working
- Check DNS propagation (can take up to 48 hours)
- Verify DNS records are correct
- Contact your domain provider

#### 3. Images Not Loading
- Check image paths in `public/images/`
- Verify file permissions
- Clear browser cache

#### 4. 404 Errors
- Check Next.js routing
- Verify file structure
- Check Vercel deployment logs

## 📞 Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

### Domain Provider Support
- Contact your domain provider's support
- They can help with DNS configuration

## 🎉 Success Checklist

- ✅ Code pushed to GitHub
- ✅ Vercel deployment successful
- ✅ Custom domain configured
- ✅ SSL certificate active
- ✅ Website loads correctly
- ✅ All functionality working
- ✅ Mobile responsive
- ✅ Performance optimized

## 🚀 Your Website is Live!

Your Axie Cord website is now live at your custom domain with:
- ✅ Professional hosting on Vercel
- ✅ Global CDN for fast loading
- ✅ Automatic SSL certificate
- ✅ Continuous deployment
- ✅ Professional domain

**"Will you pull the cord?"** - Your website is ready to conquer the digital realm! 🎯 