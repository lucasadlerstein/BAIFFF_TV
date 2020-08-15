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
                <title>BAIFFF - Buenos Aires International Fashion Film Festival</title>
                <meta name="description" content={t('Head.Description')} />
                <meta name="keywords" content={t('Head.Keywords')} />
                <meta name="robots" content="index, follow" />
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