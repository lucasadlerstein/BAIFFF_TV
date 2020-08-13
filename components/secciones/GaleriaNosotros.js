import React from 'react';
import {Col, Row} from 'reactstrap';
import ImagenGaleria from './ImagenGaleria';
import styled from '@emotion/styled';

const ColumnaGaleria = styled(Col)`
    @media (max-width: 991px){
        padding: 1.5rem 0 0 0;
    }
    
`;

const GaleriaNosotros = () => {
    return (
        <>
            <Row className="nm pt-4 pb-4">
                <ColumnaGaleria lg={3} xs={12} className="p-0">
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_1.jpg" />
                </ColumnaGaleria>
                <ColumnaGaleria lg={4} xs={12}>
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_2.jpg" />
                </ColumnaGaleria>
                <ColumnaGaleria lg={5} xs={12} className="pr-0 pl-0">
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_3.jpg" />
                </ColumnaGaleria>
            </Row>
            <Row className="nm pb-4">
                <ColumnaGaleria lg={2} xs={12} className="p-0">
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_4.jpg" />
                </ColumnaGaleria>
                <ColumnaGaleria lg={4} xs={12}>
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_5.jpg" />
                </ColumnaGaleria>
                <ColumnaGaleria lg={2} xs={12} className="pr-0 pl-0">
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_6.jpg" />
                </ColumnaGaleria>
                <ColumnaGaleria lg={4} xs={12} className="pr-0">
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_7.jpg" />
                </ColumnaGaleria>
            </Row>
        </>
    );
}
 
export default GaleriaNosotros;