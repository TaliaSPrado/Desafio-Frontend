// async --> o garçom trabalhando fora de sincronia
export async function fetchTags(): Promise<string[]> {
  // fetch() --> trazer pro meu projeto,
  // await --> toda vez que fizermos uma requisição web, precisamos do await
  const response = await fetch("https://cataas.com/api/tags");
  if (! response.ok) throw new Error("Erro ao buscar tags");
  // perguntado se não esta ok, levanta um novo erro ()
  return response.json();
}

