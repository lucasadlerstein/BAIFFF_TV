import React from 'react';
import TituloSeccion from './ui/TituloSeccion';
import {Col, Row, Container} from 'reactstrap';
import styled from '@emotion/styled';

import { withTranslation } from '../i18n';

const Aliado = styled.img`
    height: auto;
    @media (min-width: 768px){
        max-width: 90%;
    }
`;
const Grilla = styled(Row)`
    max-width: 85%;
    margin: 0 auto;
`;
const Contenedor = styled(Container)`
    padding: 4rem 0 3rem;
    h3 {
        margin-bottom: 3rem;
    }
    @media (min-width: 768px){
        padding: 8rem 0 10rem;
        h3 {
            margin-bottom: 5rem;
        }
    }
`;
const ColumnaAfiliado = styled(Col)`
    text-align:center;
    @media (max-width: 991px){
        margin-bottom: 2rem;
    }
`;

const Sponsors = ({t}) => {

    return ( 
        <>
            <Contenedor>
                <TituloSeccion tamano={'4.8rem'} tamanoSm={'3rem'} texto={t('Sponsors.Titulo')} />
                <Grilla>
                    <ColumnaAfiliado xs={6} sm={6} lg={3}>
                        <Aliado src={'/img/HOME/Home_1.jpg'} alt={t('Sponsors.Aliados.1')} />
                    </ColumnaAfiliado>
                    <ColumnaAfiliado xs={6} sm={6} lg={3}>
                        <Aliado src={'/img/HOME/Home_1.jpg'} alt={t('Sponsors.Aliados.2')} />
                    </ColumnaAfiliado>
                    <ColumnaAfiliado xs={6} sm={6} lg={3}>
                        <Aliado src={'/img/HOME/Home_1.jpg'} alt={t('Sponsors.Aliados.3')} />
                    </ColumnaAfiliado>
                    <ColumnaAfiliado xs={6} sm={6} lg={3}>
                        <Aliado src={'/img/HOME/Home_1.jpg'} alt={t('Sponsors.Aliados.4')} />
                    </ColumnaAfiliado>
                </Grilla>
            </Contenedor>
        </>
    );
}
 
export default withTranslation('inicio')(Sponsors);