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
          <link rel="preconnect" href="https://www.elnacional.com"/>
          <link rel="preconnect" href="https://googleads.g.doubleclick.net"/>  
          <link rel="dns-prefetch" href="https://static.doubleclick.net"/> 
          <link rel="preload" href="/fonts/Charter-Regular.ttf" as="font"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument