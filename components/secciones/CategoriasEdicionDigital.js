import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import TituloSeccion from '../ui/TituloSeccion';
import styled from '@emotion/styled';
import CategoriaIndividual from './CategoriaIndividual';

import {withTranslation} from '../../i18n';

const Contenedor = styled(Container)`
    padding-top: 8rem;
    padding-bottom: 5rem;
    @media (max-width: 540px){
        padding: 3rem;
        width: 90%;
        margin: 3rem auto 0;
    }
`;
const Lista = styled.ul`
    margin: 0;
    padding: 0;
`;
const RowP = styled(Row)`
    padding-top: 6rem;
`;

const CategoriasEdicionDigital = ({t}) => {
    return (
        <Contenedor>
            <TituloSeccion texto={t('Categorias.Titulo')} color={false} tamano={'7rem'} />
            <RowP>
                <Col sm={12} lg={5}>
                    <Lista>
                        <CategoriaIndividual categoria={t('Categorias.1')} />
                        <CategoriaIndividual categoria={t('Categorias.2')} />
                        <CategoriaIndividual categoria={t('Categorias.3')} />
                        <CategoriaIndividual categoria={t('Categorias.4')} />
                        <CategoriaIndividual categoria={t('Categorias.5')} />
                    </Lista>
                </Col>
                <Col sm={12} lg={4}>
                        <CategoriaIndividual categoria={t('Categorias.6')} />
                        <CategoriaIndividual categoria={t('Categorias.7')} />
                        <CategoriaIndividual categoria={t('Categorias.8')} />
                        <CategoriaIndividual categoria={t('Categorias.9')} />
                        <CategoriaIndividual categoria={t('Categorias.10')} />
                </Col>
                <Col sm={12} lg={3}>
                        <CategoriaIndividual categoria={t('Categorias.11')} />
                        <CategoriaIndividual categoria={t('Categorias.12')} />
                        <CategoriaIndividual categoria={t('Categorias.13')} />
                        <CategoriaIndividual categoria={t('Categorias.14')} />
                </Col>
            </RowP>
        </Contenedor>
    );
}
 
export default withTranslation('edicion-digital')(CategoriasEdicionDigital);