import React from 'react';
import Head from 'next/head';
import Navegacion from './Navegacion';
import Footer from './Footer';

import {withTranslation} from '../i18n';

const Layout = ({children, t}) => {
    return ( 
        <>
            <Head>
                <meta charet="UTF-8" />
                <title>{t('Head.Title')}</title>
                <meta name="description" content={t('Head.Description')} />
                <meta name="keywords" content={t('Head.Keywords')} />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google" content="notranslate" />
            </Head>
            <div>
                <Navegacion />
                <main>
                    {children}
                </main>
                <Footer />
            </div>

        </>
     );
}

export default withTranslation('common')(Layout);