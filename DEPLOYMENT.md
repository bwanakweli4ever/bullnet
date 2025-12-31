# BullNet - cPanel Deployment Guide

This guide will help you deploy the BullNet React application to your cPanel hosting.

## 📋 Prerequisites

- cPanel hosting account with File Manager access
- FTP/SFTP client (optional, File Manager works too)
- Domain name configured in cPanel

## 🚀 Deployment Steps

### Step 1: Build the Production Version

The production build has already been created in the `dist` folder. If you need to rebuild:

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Step 2: Upload Files to cPanel

#### Option A: Using cPanel File Manager

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to your domain's root directory (usually `public_html` or `www`)
4. **Delete all existing files** in the root directory (backup first if needed)
5. Upload all files from the `dist` folder to the root directory
   - Select all files in `dist` folder
   - Upload them to `public_html` (or your domain's root)

#### Option B: Using FTP/SFTP

1. Connect to your server via FTP/SFTP
2. Navigate to `public_html` (or your domain's root)
3. Upload all contents from the `dist` folder

### Step 3: Verify .htaccess File

Ensure the `.htaccess` file is uploaded to the root directory. This file:
- Enables React Router client-side routing
- Configures compression and caching
- Sets security headers
- Handles HTTPS redirects (uncomment when SSL is ready)

**Important:** The `.htaccess` file must be in the root directory (`public_html`).

### Step 4: Configure Domain (if using subdomain)

If deploying to a subdomain:
1. Go to **Subdomains** in cPanel
2. Create or configure your subdomain
3. Point it to `public_html` or a subdirectory

### Step 5: Enable SSL/HTTPS (Recommended)

1. Go to **SSL/TLS Status** in cPanel
2. Install an SSL certificate (Let's Encrypt is free)
3. Once SSL is active, uncomment these lines in `.htaccess`:
   ```apache
   # Force HTTPS
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### Step 6: Test Your Website

1. Visit your domain in a browser
2. Test all pages:
   - Home (`/`)
   - About (`/about`)
   - Services (`/services`)
   - Shop (`/shop`)
   - Contact (`/contact`)
3. Test navigation and routing
4. Check mobile responsiveness

## 📁 File Structure After Deployment

```
public_html/
├── .htaccess          (Important: Must be present)
├── index.html         (Main entry point)
├── assets/
│   ├── css/          (Stylesheets)
│   ├── js/           (JavaScript bundles)
│   ├── png/          (PNG images)
│   ├── jpg/          (JPG images)
│   └── ...           (Other assets)
└── images/            (Public images)
```

## ⚙️ Configuration

### Base Path Configuration

If your site is not in the root directory (e.g., in a subdirectory), update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-subdirectory/',
  // ... rest of config
})
```

Then rebuild: `npm run build`

### Environment Variables

If you need environment variables:
1. Create `.env.production` file
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_URL=https://api.example.com
   ```
3. Rebuild the project

## 🔧 Troubleshooting

### Issue: 404 Errors on Page Refresh

**Solution:** Ensure `.htaccess` file is in the root directory and contains the React Router rewrite rules.

### Issue: Assets Not Loading

**Solution:** 
- Check file permissions (should be 644 for files, 755 for directories)
- Verify all files were uploaded correctly
- Clear browser cache

### Issue: White Screen / Blank Page

**Solution:**
- Check browser console for errors
- Verify `index.html` is in the root directory
- Check that all JavaScript files are loading
- Ensure `.htaccess` is not blocking files

### Issue: Slow Loading

**Solution:**
- Enable Gzip compression in cPanel (usually automatic with `.htaccess`)
- Check image sizes and optimize if needed
- Enable caching in cPanel

## 📊 Performance Optimization

The build is already optimized with:
- ✅ Code minification
- ✅ CSS minification
- ✅ Asset optimization
- ✅ Code splitting (vendor, router, main chunks)
- ✅ Console removal in production
- ✅ Gzip compression (via .htaccess)
- ✅ Browser caching (via .htaccess)

## 🔒 Security

The `.htaccess` file includes:
- X-Content-Type-Options header
- X-Frame-Options header
- X-XSS-Protection header
- Referrer-Policy header

## 📝 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Images load properly
- [ ] Forms submit correctly (Contact page)
- [ ] WhatsApp links work (Shop page)
- [ ] Mobile menu works
- [ ] SSL certificate installed (if applicable)
- [ ] HTTPS redirect enabled (if SSL is active)
- [ ] Google Analytics added (if needed)
- [ ] SEO meta tags verified
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

## 🔄 Updating the Website

To update the website:

1. Make changes to the source code
2. Run `npm run build` locally
3. Upload new files from `dist` folder to cPanel
4. Clear browser cache and test

## 📞 Support

For issues or questions:
- Email: bullnetltd@gmail.com
- Phone: +250 783 611 372

---

**Last Updated:** $(date)
**Build Version:** Production Build
**Framework:** React 18 + TypeScript + Vite

