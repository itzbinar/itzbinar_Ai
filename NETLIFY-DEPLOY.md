# Deploying itzbinar Ai to Netlify

This guide will walk you through deploying your itzbinar Ai application to Netlify.

## Prerequisites

1. A Netlify account (sign up at [netlify.com](https://netlify.com))
2. Your itzbinar Ai codebase pushed to a GitHub repository

## Option 1: One-Click Deploy

The easiest way to deploy is using the Netlify deploy button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/itzbinar/itzbinar_Ai)

This will automatically:
1. Fork the repository to your GitHub account
2. Connect Netlify to the forked repository
3. Set up a new site with the correct build settings

## Option 2: Manual Deployment

### 1. Push Your Code to GitHub

First, ensure your code is pushed to a GitHub repository.

```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### 2. Connect to Netlify

1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Select GitHub as your Git provider
4. Authenticate with GitHub and select your repository

### 3. Configure Build Settings

Netlify should automatically detect the correct settings based on the `netlify.toml` file, but verify:

- Build command: `pnpm run build`
- Publish directory: `build/client`
- Node version: 18 (or higher)

### 4. Deploy Your Site

Click "Deploy site" and wait for the build to complete.

## Environment Variables

If your application requires environment variables (API keys, etc.), add them in Netlify:

1. Go to Site settings > Build & deploy > Environment
2. Add the required variables like `OPENAI_API_KEY`, etc.

## Custom Domain Setup

To use a custom domain:

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to verify your domain ownership
4. Set up DNS records as instructed by Netlify

## Continuous Deployment

Netlify automatically sets up continuous deployment. Any push to your main branch will trigger a new build and deployment.

## Troubleshooting

If you encounter build errors:

1. Check the build logs in Netlify
2. Ensure all dependencies are correctly installed
3. Verify your Node.js version is compatible
4. Make sure the build memory is sufficient

## Additional Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) for local testing
- [Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/) for extending your build process 