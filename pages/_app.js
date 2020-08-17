import React from 'react';
import App from 'next/app';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components";

import { appWithTranslation } from '../i18n'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MonumentExtended';
      src: url('/fonts/MonumentExtended-Regular.otf');
  }
  @font-face {
    font-family: 'MonumentExtended Ultrabold';
      src: url('/fonts/MonumentExtended-Ultrabold.otf');
  }

  @font-face {
    font-family: 'Raleway';
      src: url('/fonts/Ralway-Bold.ttf');
      src: url('/fonts/Ralway-BoldItalic.ttf');
      src: url('/fonts/Ralway-Italic.ttf');
      src: url('/fonts/Raleway-Regular.ttf');
  }
  @font-face {
    font-family: 'Raleway Bold';
      src: url('/fonts/Ralway-Bold.ttf');
  }

  h1, h2, h3, h4 {
    font-family: 'MonumentExtended'
  }
  p {
    font-family: 'Raleway';
  }
`;

const MyApp = ({ Component, pageProps }) => <> <GlobalStyle /> <Component {...pageProps} /> </>

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp);