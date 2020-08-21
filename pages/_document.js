import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'El Nacional'
const APP_DESCRIPTION = 'EL NACIONAL ¿Qué pasa en Venezuela? Noticias y contenido de primera. Política, sucesos, entretenimiento, opinión, deportes, economía y mucho más'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charset="utf-8"/>
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#001689' />
          
          
          <link rel='apple-touch-icon' sizes='180x180' href='/images/icons/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <style>{
            `
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            `
          }</style>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="mobile-web-app-capable" content="yes"/>

          <meta name="msapplication-navbutton-color" content="#001689"/>
          <meta name="msapplication-TileColor" content="#001689"/>
          <meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png"/>
          <meta name="msapplication-config" content="browserconfig.xml"/>

          <meta name="msapplication-tooltip" content="Noticias sobre Venezuela y el Mundo"/>
          <meta name="msapplication-starturl" content="/"/>

          <meta name="msapplication-tap-highlight" content="no"/>

          <meta name="full-screen" content="yes"/>
          <meta name="browsermode" content="application"/>

          <meta name="screen-orientation" content="portrait"/>

          <link href="/images/favicon-16.png" rel="icon" type="image/png" sizes="16x16"/>
          <link href="/images/favicon-32.png" rel="icon" type="image/png" sizes="32x32"/>
          <link href="/images/favicon-96.png" rel="icon" type="image/png" sizes="96x96"/>

          <link href="/images/apple-icon-57x57.png" rel="apple-touch-icon"/>
          <link href="/images/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76"/>
          <link href="/images/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120"/>
          <link href="/images/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152"/>

          <link href="/images/icons/icon-192x192.png" rel="icon" sizes="192x192"/>
          <link href="/images/icons/icon-128x128.png" rel="icon" sizes="128x128"/>

          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon"/>

          <link href="/images/apple-icon-57x57.png" rel="apple-touch-icon-precomposed" sizes="57x57"/>
          <link href="/images/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72"/>

          <script async src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.10/pwacompat.min.js"
          integrity="sha384-I1iiXcTSM6j2xczpDckV+qhhbqiip6FyD6R5CpuqNaWXvyDUvXN5ZhIiyLQ7uuTh"
          crossorigin="anonymous"></script>

          <link rel="preconnect" href="https://www.googletagmanager.com"/>
          <link rel="preconnect" href="https://www.googletagservices.com"/>
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PV6WLCJ');`,
          }}>
          </script>
          <link rel="preconnect" href="https://googleads.g.doubleclick.net"/>  
          <link rel="dns-prefetch" href="https://static.doubleclick.net"/> 
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <script async="async" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>   
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PV6WLCJ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument