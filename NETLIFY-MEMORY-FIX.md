# Fixing Netlify Memory Issues

This document provides information on addressing memory-related issues when deploying to Netlify.

## Recent Fixes

We've implemented several fixes to address the JavaScript heap out of memory error:

1. **Added dedicated Netlify build script:**
   - Created `netlify-build.js` that handles memory allocation and retries
   - The script automatically increases memory if initial build fails

2. **Updated Netlify configuration:**
   - Modified `netlify.toml` to use higher memory limits (6GB)
   - Set proper NODE_OPTIONS environment variable

3. **Added Netlify-specific build command:**
   - Added `build:netlify` script to package.json with higher memory allocation

## Manual Netlify Environment Variable Configuration

If build errors persist, you can manually set the following environment variables in the Netlify dashboard:

1. Log in to your Netlify dashboard
2. Go to Site settings > Build & deploy > Environment
3. Add the following environment variables:
   - `NODE_OPTIONS`: `--max_old_space_size=6144`
   - `NPM_FLAGS`: `--no-audit --no-fund`

## Additional Optimization Tips

If memory issues persist despite these fixes:

1. **Split build steps:**
   - Consider breaking the build into smaller steps
   - Use Netlify build plugins to optimize the process

2. **Analyze and reduce dependencies:**
   - Use tools like `webpack-bundle-analyzer` to identify large dependencies
   - Consider code-splitting and lazy-loading for components

3. **Increase memory further:**
   - You can try increasing to 8192MB if needed: `--max_old_space_size=8192`
   - Note that Netlify has maximum limits on build memory

4. **Contact Netlify support:**
   - For persistently large builds, contact Netlify support for options
   - They may be able to allocate more resources to your build

## Request a Build Cache Reset

Sometimes, clearing the Netlify build cache can help:

1. Go to Site settings > Build & deploy > Continuous Deployment
2. Click "Clear cache and deploy site"

This forces Netlify to rebuild without using potentially corrupted cache files. 