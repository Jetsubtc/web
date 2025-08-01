# 🚀 Deploy Axie Cord to www.axiee.xyz

Complete step-by-step guide to get your website live at www.axiee.xyz

## ✅ Current Status
- ✅ Code pushed to GitHub: https://github.com/Jetsubtc/web
- ✅ Latest changes committed and pushed
- ✅ All files ready for deployment

## 🎯 Step-by-Step Deployment

### Step 1: Deploy to Vercel (10 minutes)

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository**: `Jetsubtc/web`
5. **Configure settings**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. **Click "Deploy"**
7. **Wait for build** (2-3 minutes)
8. **Your site will be live at**: `https://web-xxx.vercel.app`

### Step 2: Configure Custom Domain (15 minutes)

1. **In Vercel Dashboard**:
   - Go to your project
   - Click **"Settings"** → **"Domains"**
   - Click **"Add Domain"**
   - Enter: `www.axiee.xyz`
   - Click **"Add"**

2. **Configure DNS Records**:
   Vercel will show you the DNS configuration. Add these records to your domain provider:

   **For www.axiee.xyz:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **For axiee.xyz (root domain):**
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   ```

3. **Wait for DNS Propagation**:
   - Can take 5-48 hours
   - Usually works within 30 minutes
   - Vercel will automatically provision SSL certificate

### Step 3: Verify Deployment

1. **Check Vercel Status**:
   - Go to your Vercel project dashboard
   - Look for green "Ready" status
   - Check deployment logs for any errors

2. **Test Your Website**:
   - Visit: https://www.axiee.xyz
   - Test all pages and functionality
   - Check mobile responsiveness
   - Verify all images load correctly

3. **Performance Check**:
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Verify SEO meta tags

## 🔧 Troubleshooting

### If Build Fails:
1. Check Vercel build logs
2. Ensure all dependencies are in package.json
3. Verify Node.js version compatibility

### If Domain Not Working:
1. Check DNS propagation (can take up to 48 hours)
2. Verify DNS records are correct
3. Contact your domain provider

### If Images Not Loading:
1. Check image paths in public/images/
2. Verify file permissions
3. Clear browser cache

## 📞 Support

### Vercel Support:
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

### Domain Provider Support:
- Contact your domain provider's support
- They can help with DNS configuration

## 🎉 Success Checklist

- [ ] Vercel deployment successful
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Website loads correctly at www.axiee.xyz
- [ ] All functionality working
- [ ] Mobile responsive
- [ ] Performance optimized

## 🚀 Your Website Will Be Live At:

**https://www.axiee.xyz**

With:
- ✅ Professional hosting on Vercel
- ✅ Global CDN for fast loading
- ✅ Automatic SSL certificate
- ✅ Continuous deployment
- ✅ Professional domain

**"Will you pull the cord?"** - Your website is ready to conquer the digital realm! 🎯 