import { getEventoBySlug, getAllEventi } from '@/lib/strapi';
import { renderStrapiBlocks } from '@/lib/renderStrapiBlocks';
import { RenderDynamicZone } from '@/lib/RenderDynamicZone';
import TuttiEventiSlider from '@/components/TuttiEventiSlider';

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
  ContenutoEvento?: any[];
  SidebarQuickInfo?: any[];
  SidebarInformazioni?: any[];
  SidebarRassegnaStampa?: any[];
};

type EventoItem = {
  id: number;
  attributes: EventoAttributes;
};

export default async function EventoPage({ params }: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;  // await qui
  const resolvedParams = await params;
  const evento = await getEventoBySlug(slug);
  const res = await getAllEventi();
	const tuttiGliEventi: EventoItem[] = (res?.data || []).sort((a, b) =>
	  new Date(b.attributes.DataEvento ?? '').getTime() -
	  new Date(a.attributes.DataEvento ?? '').getTime()
	);

  if (!evento) {
    return <div>Evento non trovato</div>;
  }

  const {
    Titolo,
    DataEvento,
    DataFine,
    Location,
    MainImage,
    ContenutoEvento,
    SidebarQuickInfo,
    SidebarInformazioni,
    SidebarRassegnaStampa,
  } = evento.attributes;

  const formatDate = (dateStr: string | null | undefined, includeYear = false) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      ...(includeYear ? { year: 'numeric' } : {}),
    };
    return date.toLocaleDateString('it-IT', options);
  };

  const dataInizio = formatDate(DataEvento, !DataFine);
  const dataFine = DataFine ? formatDate(DataFine, true) : null;

  return (
    <main>
      <section id="page">
        <header className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 style={{ textTransform: 'none' }}>
                  {Titolo} – dal {dataInizio}{dataFine ? ` al ${dataFine}` : ''}
                </h1>
                {Location && <p>{Location}</p>}
              </div>
            </div>
          </div>
        </header>

        <section id="content" className="pt30 pb30">
          <div className="container">
            <div className="row">
              <section className="col-md-9 corpo-centrale-dettaglio-eventi">
                {MainImage?.data?.attributes?.fullUrl && (
                  <img
                    src={MainImage.data.attributes.fullUrl}
                    alt={Titolo}
                    style={{ width: '100%', marginBottom: '20px' }}
                  />
                )}

                {ContenutoEvento && ContenutoEvento.length > 0 && (
                  <RenderDynamicZone blocks={ContenutoEvento} />
                )}
              </section>

              <aside id="sidebar" className="col-md-3 sidebar-box">
                <div className="fr-view">
                  <p><strong>{Titolo}</strong></p>
                  {Location && <p>{Location}</p>}
                  <p>
                    <strong>
                      {DataEvento ? new Date(DataEvento).toLocaleDateString('it-IT', { day: 'numeric', month: 'long' }) : ''}
                      {DataFine
                        ? ` – ${new Date(DataFine ?? '').toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}`
                        : ` ${new Date(DataEvento ?? '').getFullYear()}`}
                    </strong>
                  </p>
                  {(SidebarQuickInfo ?? []).length > 0 && renderStrapiBlocks(SidebarQuickInfo ?? [])}
                  {(SidebarQuickInfo ?? []).length > 0 && (SidebarInformazioni ?? []).length > 0 && <hr />}
                  {(SidebarInformazioni ?? []).length > 0 && renderStrapiBlocks(SidebarInformazioni ?? [])}
                  {(SidebarInformazioni ?? []).length > 0 && (SidebarRassegnaStampa ?? []).length > 0 && <hr />}
                  {(SidebarRassegnaStampa ?? []).length > 0 && renderStrapiBlocks(SidebarRassegnaStampa ?? [])}
                </div>
              </aside>
            </div>

            <section className="container pt-4 pb-4 sezione-tutti-eventi">
              <h2 className="mb-4">Elenco eventi</h2>
              <TuttiEventiSlider eventi={tuttiGliEventi} currentSlug={resolvedParams.slug} />
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
