
export async function fetchTags(): Promise<string[]> {
  const response = await fetch("https://cataas.com/api/tags");
  if (! response.ok) throw new Error("Erro ao buscar tags");
  return response.json();
}

