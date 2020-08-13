import React from 'react';
import styled from '@emotion/styled';

const ElTaller = ({titulo, contenido, imagen}) => {
    
    const Contenido = styled.div`
        width: 100%;
        @media (min-width: 768px){
            display: flex;
        }
    `;
    const Imagen = styled.div`
        width: 100%;
        background-image: ${`url(${imagen});`};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 35rem;
        @media (min-width: 768px){
            width: 51%;
            min-height: 100%;

        }
    `;
    const Informacion = styled.div`
        width: 100%;
        padding: 4rem 2.5rem;
        background-color: #ff0000;
        color: white;
        h3 {
            font-size: 4rem;
            text-align: center;
            line-height: 86px;
            margin-bottom: 3rem;
            text-transform: uppercase;
        }
        p {
            font-size: 1.8rem;
            line-height: 21px;
            text-align: justify;
        }
        @media (min-width: 768px){
            width: 50%;
            padding: 5rem;
            h3 {
                text-align: left;
                font-size: 3.7rem;
            }
        }
        @media (min-width: 991px){
            padding: 6rem;
            h3 {
                font-size: 5rem;
            }
        }
        @media (min-width: 1200px){
            padding: 6rem 7rem;
            h3 {
                font-size: 5.7rem;
            }
        }
        @media (min-width: 1400px){
            h3 {
                font-size: 7rem;
            }
        }
    `;
    
    return (
        <Contenido>
            <Informacion>
                <h3>{titulo}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis semper ipsum elementum, diam. Ultrices diam facilisi pretium semper semper nascetur et quis mi. Sem a tincidunt habitant pulvinar ut mattis. Porttitor commodo vel faucibus libero, enim quisque volutpat nisl, placerat. Lectus augue neque, risus felis morbi maecenas. Mattis tortor eu lorem diam. Sed egestas in malesuada pharetra. Ipsum ridiculus semper pharetra eros, nunc sit quis. Pharetra risus morbi auctor integer eget velit, in enim.
                </p>
            </Informacion>
            <Imagen></Imagen>
        </Contenido>
    );
}
 
export default ElTaller;