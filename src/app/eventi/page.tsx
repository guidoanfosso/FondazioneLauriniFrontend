import React from 'react';
import Link from 'next/link';
import { getAllEventi } from '@/lib/strapi';
import EventiPassatiSlider from '@/components/EventiPassatiSlider';

type EventoAttributes = {
  Titolo: string;
  slug: string;
  DataEvento: string | null;
  DataFine?: string | null;
  Location?: string | null;
  MainImage?: {
    data?: {
      attributes?: {
        fullUrl: string;
      };
    };
  };
  ContenutoEvento?: any[]; // se vuoi possiamo tipizzare anche questo
  SidebarQuickInfo?: any[];
  SidebarInformazioni?: any[];
  SidebarRassegnaStampa?: any[];
};

type EventoItem = {
  id: number;
  attributes: EventoAttributes;
};

export default async function EventiPage() {
  const res = await getAllEventi();
  const eventi: EventoItem[] = res?.data || [];

  const today = new Date();

  // Divido in futuri e passati
  const futuri = eventi
    .filter(e => new Date(e.attributes.DataEvento ?? '') >= today)
    .sort((a, b) => new Date(a.attributes.DataEvento ?? '').getTime() - new Date(b.attributes.DataEvento ?? '').getTime());

  const passati = eventi
    .filter(e => new Date(e.attributes.DataEvento ?? '') < today)
    .sort((a, b) => new Date(b.attributes.DataEvento ?? '').getTime() - new Date(a.attributes.DataEvento ?? '').getTime());

  // Formatta data tipo "Domenica 20 settembre 2025"
  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('it-IT', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <main className="pagina-eventi">
  {/* Se ci sono eventi futuri, mostra la sezione */}
  {futuri.length > 0 && (
      <section className="pt-4 pb-4 sezione-prossimi-eventi">
        <div className="container">
          <h2 className="mb-4">Prossimi eventi</h2>
          <div className="row text-center">
            {futuri.slice(0, 3).map((evento) => {
              const { Titolo, DataEvento, slug, MainImage } = evento.attributes;
              return (
                <div key={evento.id} className="col-md-4 mb-4">
                  <Link href={`/eventi/${slug}`}>
                    <img
                      src={MainImage?.data?.attributes?.fullUrl || '/placeholder.jpg'}
                      alt={Titolo}
                      className="img-fluid mb-2"
                    />
                  </Link>
                  <section className="boxContent">
                    <h4 className="indice-data">
                      <Link href={`/eventi/${slug}`}>{formatDate(DataEvento)}</Link>
                    </h4>
                    <h3 className="indice-titolo">
                      <Link href={`/eventi/${slug}`}>{Titolo}</Link>
                    </h3>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )}
    {/* Eventi passati */}
      <EventiPassatiSlider eventi={passati} />
    </main>
  );
}