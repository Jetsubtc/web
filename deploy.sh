#!/bin/bash

# Axie Cord Website Deployment Script
# This script will help you deploy your website to GitHub and Vercel

echo "🚀 Axie Cord Website Deployment Script"
echo "======================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Prerequisites check passed!"

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Add all files to git
echo "📦 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Initial commit: Axie Cord website ready for deployment"

# Add remote origin (you'll need to update this URL)
echo "🔗 Adding remote origin..."
echo "Please enter your GitHub repository URL (e.g., https://github.com/Jetsubtc/web.git):"
read -r repo_url

if [ -z "$repo_url" ]; then
    echo "❌ No repository URL provided. Exiting..."
    exit 1
fi

git remote add origin "$repo_url"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo ""
echo "🎉 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign up/Login with your GitHub account"
echo "3. Click 'New Project'"
echo "4. Import your GitHub repository (Jetsubtc/web)"
echo "5. Configure your project settings:"
echo "   - Framework Preset: Next.js"
echo "   - Build Command: npm run build"
echo "   - Output Directory: .next"
echo "6. Click 'Deploy'"
echo ""
echo "🌐 After Vercel deployment:"
echo "1. Go to your Vercel project dashboard"
echo "2. Click 'Settings' → 'Domains'"
echo "3. Add your custom domain"
echo "4. Configure DNS settings as instructed by Vercel"
echo ""
echo "📧 For domain configuration help, contact your domain provider"
echo ""
echo "🎯 Your website will be live at your custom domain!" 