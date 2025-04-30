#!/usr/bin/env node

/**
 * Netlify-specific build script to handle memory issues
 */

console.log('Starting Netlify build with memory optimization...');

// Increase memory limit for Node process
process.env.NODE_OPTIONS = '--max-old-space-size=6144';

// Run the build command with child_process
const { spawnSync } = require('child_process');

console.log('Node version:', process.version);
console.log('Memory settings:', process.env.NODE_OPTIONS);
console.log('Starting build command...');

// Run with retry logic
let attempts = 0;
const maxAttempts = 3;

while (attempts < maxAttempts) {
  attempts++;
  console.log(`Build attempt ${attempts}/${maxAttempts}`);
  
  const result = spawnSync('pnpm', ['run', 'build:netlify'], {
    stdio: 'inherit',
    env: { ...process.env },
    shell: true
  });
  
  if (result.status === 0) {
    console.log('Build successful!');
    process.exit(0);
  }
  
  if (attempts >= maxAttempts) {
    console.error(`Build failed after ${maxAttempts} attempts`);
    process.exit(1);
  }
  
  console.log(`Retrying build with increased memory...`);
  // Increase memory further on each attempt
  process.env.NODE_OPTIONS = `--max-old-space-size=${6144 + (attempts * 1024)}`;
} 