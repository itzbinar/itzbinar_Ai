# itzbinar Ai - Netlify Deployment

This is a configuration for deploying itzbinar Ai on Netlify. The deploy button below will:

1. Create a new repository in your GitHub account with the itzbinar Ai codebase
2. Connect Netlify to this repository
3. Set up continuous deployment for your site

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/itzbinar/itzbinar_Ai)

## Build Settings

The build is configured in `netlify.toml` with these settings:

- **Build Command**: `pnpm run build`
- **Publish Directory**: `build/client`
- **Node Version**: 18

## Required Environment Variables

For full functionality, set these environment variables in Netlify (Site settings > Build & deploy > Environment):

- `OPENAI_API_KEY` - For OpenAI integration
- `ANTHROPIC_API_KEY` - For Anthropic integration
- Other API keys as needed for your LLM providers

## Memory Requirements

This application requires significant memory during build. If you encounter memory errors, contact Netlify support to request increased build memory allocation.

## Questions or Issues?

Refer to the main [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md) file for detailed deployment instructions or open an issue in the GitHub repository.