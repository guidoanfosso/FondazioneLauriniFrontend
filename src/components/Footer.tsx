export default function Footer() {
  return (
    <footer id="footerWrapper">
      <section id="mainFooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="footerWidget text-center">
                <img src="/images/logof.png" alt="Fondazione Laurini" id="footerLogo" /><br />
                <div className="fr-view">
                  <p>
                    FONDAZIONE LAURINI - ISTITUTO DEL SIMBOLO &quot;LORENZO OSTUNI&quot;<br />
                    Palazzo Laurini, via Borgo San Donato, 8 - 85050 Tito (PZ)
                  </p>
                  <p>
                    <a
                      href="https://www.comune.tito.pz.it/"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Comune di Tito"
                    >
                      <img src="/immagini/foot/1/comune-di-tito.png" className="fr-dib" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
