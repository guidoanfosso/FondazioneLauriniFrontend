const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getEventoBySlug(slug: string) {
  const res = await fetch(
    `${baseUrl}/api/events?filters[slug][$eq]=${slug}&populate[ContenutoEvento][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-store", // oppure "force-cache" se preferisci
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  const json = await res.json();
  console.log(JSON.stringify(json, null, 2));
  const evento = json.data[0];

  // Normalizza la URL completa dell'immagine principale, se presente
  if (evento?.attributes?.MainImage?.data?.attributes?.url) {
    const originalUrl = evento.attributes.MainImage.data.attributes.url;
    evento.attributes.MainImage.data.attributes.fullUrl =
      originalUrl.startsWith('http') ? originalUrl : `${baseUrl}${originalUrl}`;
  }

  return evento;
}

export async function getAllEventi() {
  const res = await fetch(
    `${baseUrl}/api/events?populate[MainImage][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch events: ${res.statusText}`);
  }

  const json = await res.json();

  // Normalizza le URL complete per tutte le cover
  const data = json.data.map((evento: any) => {
    const img = evento?.attributes?.MainImage?.data?.attributes;
    if (img?.url) {
      img.fullUrl = img.url.startsWith('http') ? img.url : `${baseUrl}${img.url}`;
    }
    return evento;
  });

  return { data };
}