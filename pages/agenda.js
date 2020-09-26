import React from 'react';
import Layout from '../components/Layout';
import PortadaSeccion from '../components/secciones/PortadaSeccion';
import ImagenParallax from '../components/ImagenParallax';
import AgendaComponente from '../components/agenda/Agenda'; 
import ElTaller from '../components/ElTaller';
import styled from '@emotion/styled';

import {withTranslation} from '../i18n';

const DescargaCatalogo = styled.div`
    padding: 4rem 0 0 0;
    text-align: center;
    a {
        font-family: 'MonumentExtended';
        text-transform: uppercase;
        font-size: 2rem;
        color: #000000;
        text-decoration: none;
    }
    @media (min-width: 768px){
        padding: 7rem 0 0 0;
    }
`;

const Agenda = ({t}) => {
    return ( 
        <Layout>
            <PortadaSeccion foto={'/img/AGENDA/Agenda_Header.jpg'} titulo={t('Agenda.Titulo')} />
            <DescargaCatalogo>
                <a href="https://drive.google.com/file/d/1YkhyguA3Q8K-UoqeRDLdLZ7BUTg_Mafk/view?usp=drivesdk" target="_blank">{t('Agenda.Catalogo')}</a>
            </DescargaCatalogo>
            <AgendaComponente />
            {/* <ElTaller /> */}
            <ImagenParallax imagen='/img/AGENDA/Agenda_Divisor_1.jpg' nombre={t('Agenda.Titulo')} />
        </Layout>
    );
}

Agenda.getInitialProps = async () => ({
    namespacesRequired: ['agenda'],
});
 
export default withTranslation('agenda')(Agenda);