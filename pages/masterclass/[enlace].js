import React, {useState} from 'react';
import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';
import {useRouter} from 'next/router';
import {i18n, withTranslation} from '../../i18n';
import PortadaSeccion from '../../components/secciones/PortadaSeccion';
import styled from '@emotion/styled';
import CircularProgress from '@material-ui/core/CircularProgress';
// import InscripcionTaller from '../../components/taller/InscripcionTaller';

// Generar un enlace por cada slug
export async function getStaticPaths() {
    const enlaces = await clienteAxios.get('/api/talleres/slugs');
    const paths = enlaces.data.map( enlace => ({
        // Aca va un array con los SLUGS
        params: { enlace: enlace.slug_es }
    }))
    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
    const {enlace} = params;
    const resultado = await clienteAxios.get(`/api/talleres/slug/${enlace}`);

    return {
        props: {
            enlace: resultado.data
        },
        revalidate: 60
    }
}

const TallerName = ({enlace}) => {
    const router = useRouter();
    const [pagar, setPagar] = useState(false);

    if (router.isFallback) {
        return (
            <Layout>
                <div style={{textAlign: 'center'}} className="pt-4 pb-4 mb-4 mt-4">
                    <CircularProgress />
                </div>
            </Layout>
        )
    } else {
        if(enlace.status !== 'incorrecto A'){
            const Contenedor = styled.div`
                @media (min-width: 768px){
                    margin: 0 auto;
                    display: flex;
                }
            `;
            const IzquierdaTexto = styled.div`
                width: 100%;
                padding: 5rem 3rem;
                @media (min-width: 768px){
                    width: 50%;
                    padding: 5rem 7rem;
                }
                p {
                    font-size: 1.6rem;
                    text-align: justify;
                    margin-bottom: 5rem;
                    white-space: pre-line;
                }
            `;
            const DerechaImg = styled.div`
            width: 100%;
            background-image: ${`url('https://api.baifff.tv/static/${enlace.imagen_es}');`};
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            @media (min-width: 768px){
                width: 50%;
            }
            @media (max-width: 768px){
                height: 50rem;
            }
        `;    
            const BotonUI = styled.button`
            text-transform: uppercase;
            font-size: 1.8rem;
            padding: 1.5rem 2rem;
            font-family: 'MonumentExtended', sans-serif;
            /* font-weight: 700; */
            text-decoration: none;
            background-color: #FF0000;
            color: #FFFFFF!important;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all .3s ease;
            @media (min-width: 768px ){
                margin-right: 0;        
                padding: 1.5rem 5rem;
    
            }
    
            &:hover {
                background-color: #FFFFFF;
                color: #FF0000!important;
                border: 2px solid #FF0000;
            }
    
            @media (max-width: 768px){
                display: block;
                width: 100%;
                margin: 0 auto;
            }
        `;
            return (
                <Layout>
                    <PortadaSeccion foto={'/img/ELTALLER/Taller_Header.jpg'} titulo={(i18n.language === 'en' ? enlace.titulo_en : enlace.titulo_es)} />
                    <Contenedor>
                        <IzquierdaTexto>
                            <p>
                                {(i18n.language === 'en' ? enlace.descripcion_en : enlace.descripcion_es)}
                            </p>
                            {/* <BotonUI
                                onClick={() => setPagar(!pagar)}
                            >{i18n.language === 'en' ? 'Buy' : 'Comprar'}</BotonUI> */}
                        </IzquierdaTexto>
                        <DerechaImg></DerechaImg>
                    </Contenedor>
                    {/* <InscripcionTaller taller={enlace} /> */}
                </Layout>
            )
        } else {
            window.location.replace("/");
        }
    }
}

export default TallerName;