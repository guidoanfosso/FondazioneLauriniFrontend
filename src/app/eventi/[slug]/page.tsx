import { EventoItem } from '@/types/evento';
import { getEventoBySlug, getAllEventi } from '@/lib/strapi';
import { renderStrapiBlocks } from '@/lib/renderStrapiBlocks';
import { RenderDynamicZone } from '@/lib/RenderDynamicZone';
import TuttiEventiSlider from '@/components/TuttiEventiSlider';

export default async function EventoPage({ params }: { params: { slug: string } }) {

  const { slug } = params;
  const evento: EventoItem | null = await getEventoBySlug(slug);
  // Qui fai la chiamata per prendere TUTTI gli eventi
  const res = await getAllEventi();
  const tuttiGliEventi: EventoItem[] = (res?.data || []).sort((a, b) =>
  new Date(b.attributes.DataEvento).getTime() - new Date(a.attributes.DataEvento).getTime()
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

  // Format data (tipo "23 agosto", ecc.)
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

  const dataInizio = formatDate(DataEvento, !DataFine); // anno solo se non c'è data fine
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

        {/* corpo principale */}
<section id="content" className="pt30 pb30">
  <div className="container">
    <div className="row">
      <section className="col-md-9 corpo-centrale-dettaglio-eventi">
        {/* Main Image */}
        {MainImage?.data?.attributes?.fullUrl && (
          <img
            src={MainImage.data.attributes.fullUrl}
            alt={Titolo}
            style={{ width: '100%', marginBottom: '20px' }}
          />
        )}

        {/* Dynamic Zone */}

	{ContenutoEvento && ContenutoEvento.length > 0 && <RenderDynamicZone blocks={ContenutoEvento} />}

      </section>

      {/* sidebar */}
	<aside id="sidebar" className="col-md-3 sidebar-box">
  <div className="fr-view">
    {/* Titolo in grassetto */}
    <p><strong>{Titolo}</strong></p>

    {/* Location */}
    {Location && <p>{Location}</p>}

    {/* Date formattate in base alla presenza di DataFine */}
    <p>
      <strong>
        {new Date(DataEvento).toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })}
        {DataFine
          ? ` – ${new Date(DataFine).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}`
          : ` ${new Date(DataEvento).getFullYear()}`}
      </strong>
    </p>
          {/* SidebarQuickInfo */}
          {SidebarQuickInfo?.length > 0 && renderStrapiBlocks(SidebarQuickInfo)}

          {/* hr solo se c’è SidebarInformazioni */}
          {SidebarQuickInfo?.length > 0 && SidebarInformazioni?.length > 0 && <hr />}

          {/* SidebarInformazioni */}
          {SidebarInformazioni?.length > 0 && renderStrapiBlocks(SidebarInformazioni)}

          {/* hr solo se c’è SidebarRassegnaStampa */}
          {SidebarInformazioni?.length > 0 && SidebarRassegnaStampa?.length > 0 && <hr />}

          {/* SidebarRassegnaStampa */}
          {SidebarRassegnaStampa?.length > 0 && renderStrapiBlocks(SidebarRassegnaStampa)}
        </div>
</aside>
    </div>
  {/* Slider tutti gli eventi */}
      <section className="container pt-4 pb-4 sezione-tutti-eventi">
        <h2 className="mb-4">Elenco eventi</h2>
        <TuttiEventiSlider eventi={tuttiGliEventi} currentSlug={params.slug} />
      </section>
  </div>
</section>

      </section>
    </main>
  );
}
