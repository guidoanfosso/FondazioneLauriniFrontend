'use client';
import Script from 'next/script';
import Link from 'next/link';
import type { SlideType } from '@/types/tipi';
import SingleslideSlider from '@/components/SingleslideSlider';

export default function Home() {
	const homeslides: SlideType[] = [
  {
    id: 1,
    attributes: {
      Titolo: 'Chi siamo',
      UrlLink: 'fondazione-laurini-chi-siamo.html',
      Image: {
        data: {
          attributes: {
            fullUrl: '/home/banner-home-1.jpg',
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      Titolo: 'Istituto del simbolo Lorenzo Ostuni',
      UrlLink: 'istituto-del-simbolo-lorenzo-ostuni.html',
      Image: {
        data: {
          attributes: {
            fullUrl: '/home/banner-home-2.jpg',
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      Titolo: 'Mostra Magia della Luce',
      UrlLink: 'news/mostra-magia-della-luce-lorenzo-ostuni.html',
      Image: {
        data: {
          attributes: {
            fullUrl: '/home/banner-home-3.jpg',
          },
        },
      },
    },
  },
];

  return (
<>

      {/* Scripts e CSS (cookies) */}
      <link rel="stylesheet" href="/css/cookiecuttr.min.css" />
      <Script src="/js-plugin/jquery/1.8.3/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.cookie.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.cookiecuttr.min.js" strategy="afterInteractive" />
      <Script src="/js/cookies.min.js" strategy="afterInteractive" />
    <section id="slider-home" className="singleslider-home pb30">
    {/* Slider della home page*/}
      <SingleslideSlider slides={homeslides} />
      </section>
       {/* Contenuto centrale */}
      <section id="contenuti" className="pt30 pb30">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="fr-view">
                <p style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: 48, lineHeight: 1 }}>La Fondazione Laurini</span>
                  <br /><br />
                  Nata il 9 luglio 2018 su iniziativa di Francesco e Giancarlo Laurini, d&apos;intesa con l&apos;
              <a href="https://www.comune.tito.pz.it/" rel="noopener noreferrer" target="_blank" title="Comunale di Tito">Amministrazione Comunale di Tito</a>,
              con la quale da molto tempo erano in corso contatti per la realizzazione di un progetto di valorizzazione dell&apos;antico Palazzo di famiglia, ubicato nel Centro storico del Paese, con l&apos;obbiettivo di crearvi un Centro museale archeologico e culturale a disposizione della Comunità titese, oltre che di studiosi, ricercatori e turisti, che sempre più numerosi scoprono e visitano la Basilicata.
              <br /><br />
              Il Centro ospiterà anche l&apos;Istituto del Simbolo, creato dal compianto prof. Lorenzo Ostuni, i cui figli Vincenzo e Angelica hanno partecipato, unitamente alla madre Fiorella Fiore, alla costituzione della Fondazione e sono fortemente impegnati nella organizzazione dell&apos;Istituto.
              <br /><br />
              Nel Palazzo sarà collocato, oltre alle opere letterarie e artistiche del prof. Ostuni e una parte dei 180 specchi da lui incisi, l&apos;archivio della famiglia Laurini, con la presentazione dello studio medico del dottor Filippo Laurini, padre dei fondatori.
              <br /><br />
              Il patrimonio della Fondazione è costituito dal Palazzo in Tito alla Via Borgo San Donato n. 8 e dai primi cinque “specchi” incisi da Lorenzo Ostuni e donati dai suoi eredi alla Fondazione in occasione della costituzione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News boxes */}
      <section id="news" className="color1 pt30 pb30">
        <section id="primopiano" className="pt30 pb15">
          <div className="container">

          <div className="row text-center">
              <div className="col-sm-12">
                <div key="1" className="col-md-4 mb-4">
                  <Link href="/storia-palazzo-laurini.html">
                    <img
                      src="/home/palazzo-laurini.jpg"
                      alt="Palazzo Laurini"
                      className="img-fluid mb-2"
                    />
                  </Link>
                  <section className="boxContent">
                    <h3 className="indice-titolo">
                      <Link href="/storia-palazzo-laurini.html">Palazzo Laurini</Link>
                    </h3>
                  </section>
                </div>
                <div key="2" className="col-md-4 mb-4">
                  <Link href="istituto-del-simbolo-lorenzo-ostuni.html">
                    <img
                      src="/home/istituto-simbolo.jpg"
                      alt="Istituto del Simbolo"
                      className="img-fluid mb-2"
                    />
                  </Link>
                  <section className="boxContent">
                    <h3 className="indice-titolo">
                      <Link href="istituto-del-simbolo-lorenzo-ostuni.html">Istituto del Simbolo</Link>
                    </h3>
                  </section>
                </div>
                <div key="3" className="col-md-4 mb-4">
                  <Link href="fondazione-laurini-chi-siamo.html">
                    <img
                      src="/home/centro-culturale.jpg"
                      alt="Centro Culturale"
                      className="img-fluid mb-2"
                    />
                  </Link>
                  <section className="boxContent">
                    <h3 className="indice-titolo">
                      <Link href="fondazione-laurini-chi-siamo.html">Centro Culturale</Link>
                    </h3>
                  </section>
                </div>
              </div>
            </div>

          <div className="row text-center">
              <div className="col-sm-12">
                <div key="4" className="col-md-4 mb-4">
                  <Link href="/news/tgr-rai-fondazione-laurini.html">
                    <img
                      src="/home/video-tgr.jpg"
                      alt="TGR Rai: La Fondazione Laurini"
                      className="img-fluid mb-2"
                    />
                  </Link>
                  <section className="boxContent">
                    <h3 className="indice-titolo">
                      <Link href="/news/tgr-rai-fondazione-laurini.html">TGR Rai: La Fondazione Laurini</Link>
                    </h3>
                  </section>
                </div>
                <div key="5" className="col-md-4 mb-4">
                  <Link href="/news/raitre-geo-opere-di-lorenzo-ostuni.html">
                    <img
                      src="/home/video-geo-geo-raitre.jpg"
                      alt="Raitre: GEO & GEO"
                      className="img-fluid mb-2"
                    />
                  </Link>
                  <section className="boxContent">
                    <h3 className="indice-titolo">
                      <Link href="/news/raitre-geo-opere-di-lorenzo-ostuni.html">Raitre: GEO & GEO</Link>
                    </h3>
                  </section>
                </div>
                <div key="6" className="col-md-4 mb-4">
                  <Link href="/news/mostra-magia-della-luce-lorenzo-ostuni.html">
                    <img
                      src="/home/video-simboli-specchio.jpg"
                      alt="Simboli allo Specchio"
                      className="img-fluid mb-2"
                    />
                  </Link>
                  <section className="boxContent">
                    <h3 className="indice-titolo">
                      <Link href="/news/mostra-magia-della-luce-lorenzo-ostuni.html">Simboli allo Specchio</Link>
                    </h3>
                  </section>
                </div>
              </div>
            </div>

          </div>
        </section>
      </section>
</>
  );
}
