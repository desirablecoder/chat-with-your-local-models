# Chat with your local model using Ollama

This repo shows how to use the [Next.js](https://nextjs.org/), [LangChain](https://js.langchain.com), and [Ollama](https://ollama.ai) to create a ChatGPT-like AI-powered streaming chat bot.

## How to run

```bash
cp .env.example .env
npm install
npm run dev
```

To run the example locally you need to:

1. [Download Ollama](https://ollama.ai/download) and install it locally.
2. run `ollama run mistral` to download and install the model locally.
3. Open http://localhost:11434 to check if _Ollama is running_.
4. `yarn install` to install the required dependencies.
5. `yarn dev` to launch the development server.

## Learn More

To learn more about LangChain, OpenAI, and Next.js take a look at the following resources:

- [LangChain Documentation](https://js.langchain.com/docs) - learn about LangChain
- [Ollama](https://ollama.ai) - learn about Ollama features, models, and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
