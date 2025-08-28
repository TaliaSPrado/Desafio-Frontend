export interface Cat {
  id: string;
  url: string;
  tags: string[];
}

export async function fetchCats(): Promise<Cat[]> {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12");
  if (!response.ok) throw new Error("Erro ao buscar gatos");
  const data = await response.json();
 
  return data.map((cat: any) => ({
    id: cat.id,
    url: cat.url,
    tags: [] 
  }));
}