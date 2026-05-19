# Harbor™ Robotics Website

This is a Vercel-ready React/Vite version of the Harbor™ Robotics website.

## Local setup

1. Install Node.js from https://nodejs.org
2. Open this folder in a terminal.
3. Run:

```bash
npm install
npm run dev
```

Then open the local URL Vite gives you.

## Build test

```bash
npm run build
npm run preview
```

The production build will be created in the `dist` folder.

## Deploy to Vercel with GitHub

1. Create a new GitHub repository.
2. Upload/push this folder to GitHub.
3. Go to Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect Vite automatically.
6. Use:
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **Deploy**.

## Deploy to Vercel with CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

## Notes

This site is a public-facing product/technical draft. It does not include private Harbor source files, full proprietary logic, or robot safety-certified code.
