export interface Cat {
  id: string;
  url: string;
  tags: string[];
}

// Busca imagens de gatos na TheCatAPI e associa tags vazias (ou pode associar tags do Cataas depois)
export async function fetchCats(): Promise<Cat[]> {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12");
  if (!response.ok) throw new Error("Erro ao buscar gatos");
  const data = await response.json();
  // TheCatAPI retorna [{id, url, ...}]
  return data.map((cat: any) => ({
    id: cat.id,
    url: cat.url,
    tags: [] // tags podem ser associadas depois se quiser cruzar com Cataas
  }));
}