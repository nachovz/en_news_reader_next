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