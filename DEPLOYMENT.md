# Deployment Guide

## Netlify Deployment

This React app is configured for deployment on Netlify with the following setup:

### Folder Structure:

```
heiroglf/
├── index.html          # Main HTML file (Vite copies this to dist/)
├── public/
│   └── _redirects      # Netlify redirects (Vite copies this to dist/)
├── src/                # Source code
├── dist/               # Built files (created by npm run build)
└── netlify.toml        # Netlify configuration
```

### Files Created/Modified:

1. **`public/_redirects`** - Handles client-side routing by redirecting all routes to index.html
2. **`netlify.toml`** - Netlify configuration file
3. **Route Components** - Added placeholder pages for `/service`, `/company`, and `/contact`

### Deployment Settings:

**Build Settings:**

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18 or higher (recommended)

**Important Notes:**

- The `index.html` is in the root folder, not in `public/` (this is correct for Vite)
- Vite automatically copies `index.html` from root to `dist/` during build
- Vite automatically copies files from `public/` to `dist/` during build
- The `_redirects` file in `public/` gets copied to `dist/` during build

### Deployment Steps:

1. **Connect to Netlify:**

   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables (if needed):**

   - Add any required environment variables in Netlify dashboard

3. **Deploy:**
   - Netlify will automatically build and deploy your app
   - The `_redirects` file ensures all routes work properly

### Troubleshooting:

- **404 Errors:** Make sure the `_redirects` file is in the `public` folder and gets copied to `dist`
- **Build Errors:** Check that all imports are correct (using `react-router-dom` instead of `react-router`)
- **Routing Issues:** Verify all routes are defined in `routesTable.tsx`

### Local Testing:

```bash
npm run build
npm run preview
```

This will serve the built app locally to test the production build.

### Verify Build Output:

After running `npm run build`, check that `dist/` contains:

- `index.html`
- `_redirects`
- `assets/` folder with CSS and JS files
