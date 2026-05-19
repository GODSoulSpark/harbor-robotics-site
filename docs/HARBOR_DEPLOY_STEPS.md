# Harbor™ Robotics — Vercel Deployment Steps

## Recommended Road: GitHub + Vercel

This is the cleanest path because every future edit can be saved to GitHub and Vercel will redeploy automatically.

### 1. Make accounts

- GitHub account
- Vercel account

### 2. Put the site on GitHub

Create a repository named:

`harbor-robotics-site`

Upload all files from this folder.

### 3. Import into Vercel

In Vercel:

- Add New
- Project
- Import the GitHub repository
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Deploy

### 4. Test the live URL

Vercel will give you a live preview URL.

Check:

- Homepage opens
- Navigation buttons scroll
- Contact buttons open email
- Mobile view works
- Technical code sections are readable

### 5. Add custom domain later

You can add a domain after the first deployment works.

Possible domain names:

- harborrobotics.ai
- harborrobotics.co
- harborlayer.com
- upstreamrobotics.ai

## Faster Road: Vercel CLI

From the project folder:

```bash
npm install
npm run build
npm install -g vercel
vercel
vercel --prod
```

## Important Boundary

This is the website / product-facing layer.
It is not the full Harbor source vault, not production robot safety code, and not a replacement for certified safety systems.
