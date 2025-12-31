# Quick Deployment Guide

## 🚀 Quick Steps

1. **Build for production:**
   ```bash
   npm run build:prod
   ```

2. **Upload to cPanel:**
   - Go to cPanel → File Manager
   - Navigate to `public_html` (or your domain root)
   - Upload ALL contents from the `dist` folder

3. **Verify:**
   - Visit your domain
   - Test all pages (Home, About, Services, Shop, Contact)
   - Check mobile menu

## 📁 What to Upload

Upload everything from the `dist` folder:
- `index.html`
- `.htaccess` (IMPORTANT!)
- `assets/` folder
- `images/` folder
- `css/` folder (if exists)
- `fonts/` folder (if exists)
- `robots.txt`
- `sitemap.xml`

## ⚠️ Important Notes

- **`.htaccess` must be uploaded** - This enables React Router to work
- Upload to `public_html` (root directory)
- Clear browser cache after deployment
- Enable SSL in cPanel and uncomment HTTPS redirect in `.htaccess`

## 📞 Need Help?

See `DEPLOYMENT.md` for detailed instructions.

