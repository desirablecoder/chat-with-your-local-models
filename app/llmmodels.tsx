const OLLAMA_URL = "http://localhost:11434";

type OllamaModel = {
  name: string; // sometimes "model" or "name" depending on version
  model?: string;
};

type OllamaResponse = {
  models: OllamaModel[];
};

export async function getLocalModels(): Promise<string[]> {
  const res = await fetch(`${process.env.OLLAMA_BASE_URL}/api/tags`);

  if (!res.ok) {
    throw new Error(`Failed to fetch models: ${res.status}`);
  }

  const data: OllamaResponse = await res.json();

  return data.models.map((m) => m.model ?? m.name);
}
