# Deploying MosaicRetriever to Netlify

## 🚀 Quick Start

Your site is configured to deploy to **mosaicretriever.com**

## Steps to Deploy

### 1. Connect to Netlify

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize your site
netlify init
```

### 2. Deploy

```bash
# Deploy to production
netlify deploy --prod
```

Or simply push to your Git repository if you've connected it through the Netlify dashboard.

### 3. Configure Custom Domain

After your first deployment:

1. Go to your Netlify Dashboard
2. Navigate to **Domain Settings**
3. Click **Add custom domain**
4. Enter: `mosaicretriever.com`
5. Also add `www.mosaicretriever.com` as an alias

### 4. Update DNS Records

Point your domain to Netlify by adding these DNS records at your domain registrar:

**For root domain (mosaicretriever.com):**
- Type: `A`
- Name: `@`
- Value: `75.2.60.5`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `your-site-name.netlify.app`

**Or use Netlify DNS (recommended):**
- Update your domain's nameservers to Netlify's nameservers
- Netlify will handle all DNS configuration automatically

### 5. Enable HTTPS

Netlify automatically provisions SSL certificates via Let's Encrypt. This happens within a few minutes after domain verification.

## Configuration Files

- **`/netlify.toml`** - Main deployment configuration
- **`/public/_redirects`** - SPA routing and www redirect rules

## Environment Variables

If you need to add environment variables later:

```bash
netlify env:set VARIABLE_NAME "value"
```

Or add them in the Netlify Dashboard under **Site settings > Environment variables**

## Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

## Continuous Deployment

Once connected to Git:
- Every push to `main` branch triggers a production deployment
- Pull requests create deploy previews automatically

## Custom Domain Status

✅ Configured for: **mosaicretriever.com**
✅ WWW redirect: **www.mosaicretriever.com → mosaicretriever.com**
✅ HTTPS: Enabled automatically
✅ SPA routing: Configured

---

**Next Steps:**
1. Deploy your site: `netlify deploy --prod`
2. Add custom domain in Netlify dashboard
3. Update DNS records at your registrar
4. Wait for DNS propagation (can take up to 48 hours)
5. Visit https://mosaicretriever.com 🎉
