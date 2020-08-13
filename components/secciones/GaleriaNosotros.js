import React from 'react';
import {Col, Row} from 'reactstrap';
import ImagenGaleria from './ImagenGaleria';
import styled from '@emotion/styled';

const ColumnaGaleria = styled(Col)`
    width: calc(100% + 0.1px);
    @media (max-width: 991px){
        padding: 1.5rem 0 0 0;
    }
    
`;

const RowP = styled(Row)`
    width: calc(100% + 0.1px);
`;

const GaleriaNosotros = () => {
    return (
        <>
            <RowP className="nm pt-4 pb-4">
                <ColumnaGaleria lg={3} xs={12} className="p-0">
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_1.jpg" />
                </ColumnaGaleria>
                <ColumnaGaleria lg={4} xs={12}>
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_2.jpg" />
                </ColumnaGaleria>
                <ColumnaGaleria lg={5} xs={12} className="pr-0 pl-0">
                    <ImagenGaleria imagen="/img/NOSOTROS/Nosotros_Galeria_3.jpg" />
                </ColumnaGaleria>
            </RowP>
            <RowP className="nm pb-4">
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
            </RowP>
        </>
    );
}
 
export default GaleriaNosotros;