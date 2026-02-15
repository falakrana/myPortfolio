# 🚀 Deployment Guide

This guide will help you deploy your portfolio to the web!

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Customized all personal information
- [ ] Replaced placeholder images with your own
- [ ] Updated all social media links
- [ ] Tested on different screen sizes
- [ ] Verified all links work correctly
- [ ] Updated SEO meta tags
- [ ] Removed any console.log statements
- [ ] Tested the build locally

---

## 🏗️ Build Your Portfolio

First, create a production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

**Test the build locally:**
```bash
npm run preview
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Custom domain support
- ✅ Zero configuration needed

**Steps:**

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Login/signup when prompted
   - Confirm project settings
   - Deploy!

3. **Or Deploy via Web**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your Git repository
   - Vercel auto-detects Vite
   - Click "Deploy"

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

### Option 2: Netlify

**Why Netlify?**
- ✅ Free for personal projects
- ✅ Drag-and-drop deployment
- ✅ Automatic HTTPS
- ✅ Form handling
- ✅ Custom domain support

**Steps:**

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to https://app.netlify.com/drop
   - Drag the `dist/` folder
   - Done!

3. **Or Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

4. **Or Deploy via Git**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import from Git"
   - Connect your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add custom domain
- Configure DNS

---

### Option 3: GitHub Pages

**Why GitHub Pages?**
- ✅ Free
- ✅ Integrated with GitHub
- ✅ Good for open-source portfolios

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   Add base path:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',  // Add this line
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

**Your site will be at:**
`https://yourusername.github.io/your-repo-name/`

---

### Option 4: Cloudflare Pages

**Why Cloudflare Pages?**
- ✅ Free
- ✅ Unlimited bandwidth
- ✅ Fast global CDN
- ✅ Automatic HTTPS

**Steps:**

1. **Go to Cloudflare Pages**
   - Visit https://pages.cloudflare.com
   - Sign up/login

2. **Create a project**
   - Click "Create a project"
   - Connect to Git provider
   - Select your repository

3. **Configure build**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **Deploy**
   - Click "Save and Deploy"

---

### Option 5: Firebase Hosting

**Why Firebase?**
- ✅ Free tier available
- ✅ Google infrastructure
- ✅ Custom domain support
- ✅ SSL certificate included

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub deploys: Optional

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🌍 Custom Domain Setup

### General Steps (works for most platforms):

1. **Buy a domain** (if you don't have one)
   - Namecheap
   - Google Domains
   - GoDaddy
   - Cloudflare

2. **Add domain to your hosting platform**
   - Follow platform-specific instructions above

3. **Configure DNS**
   Add these records to your domain DNS:

   **For Vercel:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **For Netlify:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

4. **Wait for DNS propagation** (can take up to 48 hours)

5. **Enable HTTPS** (usually automatic)

---

## 🔒 Environment Variables

If you add API keys or secrets later:

**Vercel:**
- Project Settings → Environment Variables

**Netlify:**
- Site Settings → Build & Deploy → Environment

**GitHub Pages:**
- Repository Settings → Secrets

**Never commit sensitive data to Git!**

---

## 📊 Analytics (Optional)

### Google Analytics

1. **Get tracking ID**
   - Go to https://analytics.google.com
   - Create property
   - Get tracking ID (G-XXXXXXXXXX)

2. **Add to index.html**
   ```html
   <head>
     <!-- Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     </script>
   </head>
   ```

### Vercel Analytics

1. **Enable in Vercel Dashboard**
   - Project → Analytics
   - Enable

2. **Install package**
   ```bash
   npm install @vercel/analytics
   ```

3. **Add to App.jsx**
   ```jsx
   import { Analytics } from '@vercel/analytics/react';
   
   function App() {
     return (
       <>
         <div className="min-h-screen bg-dark-bg">
           {/* Your components */}
         </div>
         <Analytics />
       </>
     );
   }
   ```

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Module not found"**
- Solution: Run `npm install`

**Error: "Out of memory"**
- Solution: Increase Node memory:
  ```bash
  NODE_OPTIONS=--max_old_space_size=4096 npm run build
  ```

### Deployment Issues

**404 on refresh**
- Solution: Configure redirects for SPA
- Vercel: Add `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- Netlify: Add `_redirects` in `public/`:
  ```
  /*    /index.html   200
  ```

**Images not loading**
- Check image URLs are absolute
- Verify images are in `public/` or use external URLs

**Styles not applying**
- Clear browser cache
- Check build output includes CSS files

---

## ✅ Post-Deployment Checklist

After deploying:

- [ ] Visit your live site
- [ ] Test all navigation links
- [ ] Test all external links (GitHub, social media)
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check page load speed (use PageSpeed Insights)
- [ ] Verify SEO meta tags (use Facebook Debugger)
- [ ] Test contact links (email, phone)
- [ ] Share with friends for feedback!

---

## 📈 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress images (use TinyPNG)
   - Use appropriate sizes

2. **Enable Caching**
   - Most platforms do this automatically

3. **Use CDN**
   - Vercel, Netlify, Cloudflare all use CDNs

4. **Lazy Load Images**
   - Add `loading="lazy"` to img tags

---

## 🎉 You're Live!

Congratulations! Your portfolio is now live on the internet!

**Next Steps:**
1. Share your portfolio URL on social media
2. Add it to your resume
3. Include it in your email signature
4. Submit to portfolio directories
5. Keep it updated with new projects!

**Portfolio Directories to Submit:**
- https://www.awwwards.com
- https://www.siteinspire.com
- https://www.cssdesignawards.com
- https://dribbble.com
- https://www.behance.net

---

**Need help?** 
- Check platform-specific documentation
- Search for error messages
- Ask in developer communities (Stack Overflow, Reddit)

**Good luck! 🚀**
