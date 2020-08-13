import React from 'react';
import Head from 'next/head';
import Navegacion from './Navegacion';
import Footer from './Footer';

const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <meta charet="UTF-8" />
                <title>BAIFFF - Buenos Aires International Fashion Film Festival</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
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

export default Layout;