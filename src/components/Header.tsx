'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Blocca lo scroll quando il menu mobile è aperto
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  // Chiude il menu con ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setIsSubMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    return pathname === href ? 'active' : '';
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
      setIsSubMenuOpen(false);
    }
  };

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
                <li className="primary">
                  <Link className={`firstLevel ${isActive('/')}`} href="/" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className="sep"></li>
                <li className="primary">
                  <a
                    className={`firstLevel hasSubMenu ${pathname.includes('/fondazione-laurini') || pathname.includes('/consiglio-amministrazione') ? 'active' : ''}`}
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
                    <li><Link href="/fondazione-laurini-chi-siamo.html" onClick={handleLinkClick}>Chi siamo</Link></li>
                    <li className="last"><Link href="/consiglio-amministrazione.html" onClick={handleLinkClick}>CDA</Link></li>
                  </ul>
                </li>
                <li className="sep"></li>
                <li className="primary">
                  <Link className={`firstLevel ${pathname.startsWith('/eventi') ? 'active' : ''}`} href="/eventi" onClick={handleLinkClick}>Eventi</Link>
                </li>
                <li className="sep"></li>
                <li className="primary">
                  <Link className={`firstLevel ${isActive('/storia-palazzo-laurini.html')}`} href="/storia-palazzo-laurini.html" onClick={handleLinkClick}>Palazzo Laurini</Link>
                </li>
                <li className="sep"></li>
                <li className="primary">
                  <Link className={`firstLevel ${isActive('/archivio-storico.html')}`} href="/archivio-storico.html" onClick={handleLinkClick}>Archivio</Link>
                </li>
                <li className="sep"></li>
                <li className="primary">
                  <Link className={`firstLevel ${isActive('/istituto-del-simbolo-lorenzo-ostuni.html')}`} href="/istituto-del-simbolo-lorenzo-ostuni.html" onClick={handleLinkClick}>Istituto del Simbolo</Link>
                </li>
                <li className="sep"></li>
                <li className="last" id="lastMenu">
                  <Link className={`firstLevel ${isActive('/contatti-fondazione-laurini.html')}`} href="/contatti-fondazione-laurini.html" onClick={handleLinkClick}>Contatti</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
