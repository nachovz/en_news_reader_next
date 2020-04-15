import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>

          <meta name="theme-color" content="#001689"/>
          <meta name="mobile-web-app-capable" content="yes"/>

          <meta name="apple-mobile-web-app-title" content="El Nacional"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"/>

          <meta name="msapplication-navbutton-color" content="#001689"/>
          <meta name="msapplication-TileColor" content="#001689"/>
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png"/>
          <meta name="msapplication-config" content="browserconfig.xml"/>

          <meta name="application-name" content="El Nacional"/>
          <meta name="msapplication-tooltip" content="Noticias sobre Venezuela y el Mundo"/>
          <meta name="msapplication-starturl" content="/"/>

          <meta name="msapplication-tap-highlight" content="no"/>

          <meta name="full-screen" content="yes"/>
          <meta name="browsermode" content="application"/>

          <meta name="screen-orientation" content="portrait"/>

          <link href="favicon-16.png" rel="icon" type="image/png" sizes="16x16"/>
          <link href="favicon-32.png" rel="icon" type="image/png" sizes="32x32"/>
          <link href="favicon-48.png" rel="icon" type="image/png" sizes="48x48"/>

          <link href="touch-icon-iphone.png" rel="apple-touch-icon"/>
          <link href="touch-icon-ipad.png" rel="apple-touch-icon" sizes="76x76"/>
          <link href="touch-icon-iphone-retina.png" rel="apple-touch-icon" sizes="120x120"/>
          <link href="touch-icon-ipad-retina.png" rel="apple-touch-icon" sizes="152x152"/>

          <link href="touch-icon-start-up-320x480.png" rel="apple-touch-startup-image"/>

          <link href="path/to/icon.svg" rel="mask-icon" size="any" color="red"/>

          <link href="icon-192x192.png" rel="icon" sizes="192x192"/>
          <link href="icon-128x128.png" rel="icon" sizes="128x128"/>

          <link href="favicon.icon" rel="shortcut icon" type="image/x-icon"/>

          <link href="images/icon-52x52.png" rel="apple-touch-icon-precomposed" sizes="57x57"/>
          <link href="images/icon-72x72.png" rel="apple-touch-icon" sizes="72x72"/>

          <link href="/manifest.json" rel="manifest"/>

          <link rel="preconnect" href="https://www.google-analytics.com"/>
          <link rel="preconnect" href="https://www.googletagmanager.com"/>
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PV6WLCJ');`,
          }}>
          </script>
          <link rel="preconnect" href="https://www.elnacional.com"/>
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