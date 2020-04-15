import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

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

          <link href="/images/favicon-16.png" rel="icon" type="image/png" sizes="16x16"/>
          <link href="/images/favicon-32.png" rel="icon" type="image/png" sizes="32x32"/>
          <link href="/images/favicon-96.png" rel="icon" type="image/png" sizes="96x96"/>

          <link href="/images/apple-icon-57x57.png" rel="apple-touch-icon"/>
          <link href="/images/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76"/>
          <link href="/images/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120"/>
          <link href="/images/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152"/>

          <link href="/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />

          <link href="/images/icons/icon-192x192.png" rel="icon" sizes="192x192"/>
          <link href="/images/icons/icon-128x128.png" rel="icon" sizes="128x128"/>

          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon"/>

          <link href="images/apple-icon-57x57.png" rel="apple-touch-icon-precomposed" sizes="57x57"/>
          <link href="images/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72"/>

          <link href="/manifest.json" rel="manifest"/>

          <link rel="preconnect" href="https://www.googletagmanager.com"/>
          <link rel="preconnect" href="https://www.googletagservices.com"/>
          <link rel="preconnect" href="https://securepubads.g.doubleclick.net"/>
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