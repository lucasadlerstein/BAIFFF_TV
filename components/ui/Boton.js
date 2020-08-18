import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Boton = ({color, texto, destino, mr, anchoMobile, tblank}) => {
    const BotonUI = styled.a`
        text-align: center;
        text-transform: uppercase;
        font-size: 1.8rem;
        padding: 1.5rem 5rem;
        font-family: 'MonumentExtended', sans-serif;
        /* font-weight: 700; */
        text-decoration: none;
        background-color: ${color ? '#FF0000' : '#FFFFFF'};
        color: ${color ? '#FFFFFF!important' : '#FF0000!important'};
        border: 2px solid transparent;
        cursor: pointer;
        transition: all .3s ease;
        @media (min-width: 768px ){
            margin-right: ${mr ? mr : '0'};        
        }

        &:hover {
            background-color: ${color ? '#FFFFFF' : '#FF0000'};
            color: ${color ? '#FF0000!important' : '#FFFFFF!important'};
            border: 2px solid ${color ? '#FF0000' : '#FFFFFF'};
        }

        @media (max-width: 768px){
            display: block;
            width: ${anchoMobile ? anchoMobile : '100%'};
            margin: 0 auto;
        }
    `;
    
    return (
        <>
            {
                destino ? (
                    tblank ? (
                        <BotonUI href={destino} target="_blank">
                            {texto}
                        </BotonUI>
                    ) : (
                        <Link href={destino}>
                            <BotonUI>
                                {texto}
                            </BotonUI>
                        </Link>
                    )
                ) : (
                    <BotonUI>
                        {texto}
                    </BotonUI>
                )
            }
        </>
     );
}
 
export default Boton;