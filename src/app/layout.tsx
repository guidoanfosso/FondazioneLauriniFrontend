import './globals.css';
import '../styles/react-custom.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="La Fondazione Laurini si impegna..." />
        <meta name="keywords" content="FONDAZIONE LAURINI" />
        <meta property="og:title" content="Fondazione Laurini - Istituto del Simbolo Lorenzo Ostuni" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.fondazionelaurini.org/" />
        <meta property="og:image" content="http://www.fondazionelaurini.org/images/laurini.jpg" />
        <meta property="og:description" content="La Fondazione Laurini si impegna..." />
        <meta name="content-language" content="it" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-touch-icon-144x144.png" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Lora:400" rel="stylesheet" />

  <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/layout.min.css" />
  <link rel="stylesheet" href="/css/blue.min.css" />
  <link rel="stylesheet" href="/css/custom.min.css" />
  <link rel="stylesheet" href="/css/froala_style.min.css" />
  <link rel="stylesheet" href="/css/froala_style_mod.min.css" />
  <link rel="stylesheet" href="/js-plugin/animation-framework/animate.min.css" />
  <link rel="stylesheet" href="/font-icons/custom-icons/css/custom-icons.min.css" />
  <link rel="stylesheet" href="/font-icons/custom-icons/css/custom-icons-ie7.css" />
  <link rel="stylesheet" href="/font-icons/font-awesome-4.7.0/css/font-awesome.min.css" />
        <title>Fondazione Laurini - Istituto del Simbolo Lorenzo Ostuni</title>
      </head>
 <body className="header5"> {/* qui la classe che c’era sul body */}
        <div id="globalWrapper">  {/* questo wrapper come nell'html originale */}
          <Header />
        {children}
	  <Footer />
        </div>
      </body>
    </html>
  );
}