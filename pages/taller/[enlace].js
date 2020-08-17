import React from 'react';
import Layout from '../../components/Layout';
import clienteAxiosIn from '../../config/axiosIn';
import {useRouter} from 'next/router';
import {i18n, withTranslation} from '../../i18n';
import PortadaSeccion from '../../components/secciones/PortadaSeccion';
import styled from '@emotion/styled';
import Boton from '../../components/ui/Boton';

// Generar un enlace por cada slug
export async function getStaticPaths() {
    const enlaces = await clienteAxiosIn.get('/api/talleres/slugs');
    const paths = enlaces.data.map( enlace => ({
        // Aca va un array con los SLUGS
        params: { enlace: enlace.slug_es }
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const {enlace} = params;
    const resultado = await clienteAxiosIn.get(`/api/talleres/slug/${enlace}`);

    return {
        props: {
            enlace: resultado.data
        },
        revalidate: 60
    }
}

const Taller = ({enlace, t}) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <Layout>
                <p>Cargando...</p>
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
            return (
                <Layout>
                    <PortadaSeccion foto={'/img/ELTALLER/Taller_Header.jpg'} titulo={(i18n.language === 'en' ? enlace.titulo_en : enlace.titulo_es)} />
                    <Contenedor>
                        <IzquierdaTexto>
                            <p>
                                {(i18n.language === 'en' ? enlace.descripcion_en : enlace.descripcion_es)}
                            </p>
                            <Boton color={true} texto={t('Taller.Pagar')} />
                        </IzquierdaTexto>
                        <DerechaImg></DerechaImg>
                    </Contenedor>
                </Layout>
            )
        } else {
            window.location.replace("/");
        }

    }
}

export default withTranslation('common')(Taller);