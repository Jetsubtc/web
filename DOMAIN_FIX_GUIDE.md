# 🔧 FIX: Redirect axiee.xyz to Vercel

## 🚨 Current Problem:
- Your domain `axiee.xyz` is pointing to some other hosting service
- You need to redirect it to Vercel where your website will be hosted
- This is why you get 404 errors

## ✅ Step-by-Step Fix:

### Step 1: Deploy to Vercel (5 minutes)
1. **Go to**: https://vercel.com
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import**: `Jetsubtc/web`
5. **Click "Deploy"**
6. **Wait 2-3 minutes** for build
7. **Copy your temporary URL** (like `https://web-xxx.vercel.app`)

### Step 2: Find Your Domain Provider
**Who did you buy axiee.xyz from?**
- GoDaddy?
- Namecheap?
- Google Domains?
- Cloudflare?
- Other?

### Step 3: Access Your Domain Dashboard
1. **Go to your domain provider's website**
2. **Login to your account**
3. **Find your domain**: `axiee.xyz`
4. **Look for "DNS Management" or "DNS Settings"**

### Step 4: Update DNS Records
**Replace ALL existing DNS records with these:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)

Type: A
Name: @
Value: 76.76.19.19
TTL: 3600 (or Auto)
```

### Step 5: Add Domain in Vercel
1. **In Vercel dashboard** → **Settings** → **Domains**
2. **Click "Add Domain"**
3. **Enter**: `www.axiee.xyz`
4. **Click "Add"**
5. **Wait for verification** (usually 5-10 minutes)

### Step 6: Test Your Website
1. **Wait 30 minutes** for DNS propagation
2. **Test**: https://www.axiee.xyz
3. **Test**: https://axiee.xyz (should redirect to www)

## 🔧 Provider-Specific Instructions:

### For GoDaddy:
1. Go to: https://godaddy.com
2. Login → My Products → Domains
3. Click "DNS" next to axiee.xyz
4. Delete all existing records
5. Add the CNAME and A records above

### For Namecheap:
1. Go to: https://namecheap.com
2. Login → Domain List
3. Click "Manage" next to axiee.xyz
4. Go to "Advanced DNS"
5. Delete all records, add the new ones

### For Cloudflare:
1. Go to: https://cloudflare.com
2. Login → Select axiee.xyz
3. Go to "DNS" tab
4. Delete all records, add the new ones

### For Google Domains:
1. Go to: https://domains.google
2. Login → Select axiee.xyz
3. Go to "DNS" tab
4. Delete all records, add the new ones

## ⏰ Timeline:
- **Step 1-2**: 5 minutes
- **Step 3-4**: 10 minutes
- **Step 5**: 5 minutes
- **DNS Propagation**: 30 minutes
- **Total**: ~50 minutes

## 🎯 Expected Results:
- ✅ `www.axiee.xyz` works
- ✅ `axiee.xyz` redirects to www
- ✅ SSL certificate active
- ✅ Your Axie Cord website loads

## 📞 Need Help?
**Tell me your domain provider and I'll give you exact steps!**

## 🚀 Your Website WILL Work!

Once you redirect the DNS to Vercel, your website will be live at www.axiee.xyz! 🎯 