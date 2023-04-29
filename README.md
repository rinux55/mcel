# Mushroom Cultivation and Extraction Laboratory Assistant (MCEL-a)

This app acts as a personal AI assistant which can tell you everything about cultivating mushrooms. It queries OpenAi's GPT-3-turbo model.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Configuration

Copy `.env.example` to `.env` and configure `OPENAI_API_KEY` to have your OpenAI API key.

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
