// Header.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="navbar-fixed-top">
      <div id="mainHeader" role="banner">
        <div className="container">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Menu di navigazione</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" href="/">
                <img src="/images/logo.png" alt="Fondazione Laurini" />
              </Link>
            </div>
            <div className={`collapse navbar-collapse ${isOpen ? 'in' : ''}`} id="mainMenu">
              <ul className="nav navbar-nav pull-right">
                <li className="primary"><Link className="firstLevel active" href="/index.html">Home</Link></li>
                <li className="sep"></li>
                <li className="primary">
                  <a
                    className="firstLevel hasSubMenu"
                    href="#"
                    onClick={(e) => {
                      if (isMobile) {
                        e.preventDefault();
                        setIsSubMenuOpen(!isSubMenuOpen);
                      }
                    }}
                  >
                    Fondazione
                  </a>
                  <ul className={`subMenu ${isSubMenuOpen ? 'open' : ''}`}>
                    <li><Link href="/fondazione-laurini-chi-siamo.html">Chi siamo</Link></li>
                    <li className="last"><Link href="/consiglio-amministrazione.html">CDA</Link></li>
                  </ul>
                </li>
                <li className="sep"></li>
                <li className="primary"><Link className="firstLevel" href="/eventi">Eventi</Link></li>
                <li className="sep"></li>
                <li className="primary"><Link className="firstLevel" href="/storia-palazzo-laurini.html">Palazzo Laurini</Link></li>
                <li className="sep"></li>
                <li className="primary"><Link className="firstLevel" href="/archivio-storico.html">Archivio</Link></li>
                <li className="sep"></li>
                <li className="primary"><Link className="firstLevel" href="/istituto-del-simbolo-lorenzo-ostuni.html">Istituto del Simbolo</Link></li>
                <li className="sep"></li>
                <li className="last" id="lastMenu"><Link className="firstLevel" href="/contatti-fondazione-laurini.html">Contatti</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

