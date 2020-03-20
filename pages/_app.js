import React from 'react';
import Header from 'component/ui/Header';
import Footer from 'component/ui/Footer';
import { HEADER_HEIGHT, SPACING } from 'styles/constants';
import 'styles/index.css';
import 'normalize.css';


function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header/>
        <div style={{ paddingTop: HEADER_HEIGHT + (SPACING*2) }}>
          <Component {...pageProps} />
        </div>
      <Footer/>
    </React.Fragment>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp