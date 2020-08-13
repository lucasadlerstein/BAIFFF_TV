import React from 'react';
import { Row, Col} from 'reactstrap';
import NosotrosIzquierda from '../components/NosotrosIzquierda';
import NosotrosDerecha from '../components/NosotrosDerecha';
import styled from '@emotion/styled';

const ColIzq = styled(Col)`
    padding-right: 0;
    @media (max-width: 768px){
        padding-left: 0;
    }
`;
const ColDer = styled(Col)`
    padding-left: 0;
    @media (max-width: 768px){
        padding-right: 0;
    }
`;
const RowP = styled(Row)`
    @media (max-width: 768px){
        margin: 0;
    }
`;

const SeccionNosotros = () => {
    return ( 
        <RowP>
            <ColIzq sm={12} md={6}>
                <NosotrosIzquierda />
            </ColIzq>
            <ColDer sm={12} md={6}>
                <NosotrosDerecha />
            </ColDer>
        </RowP>
    );
}
 
export default SeccionNosotros;