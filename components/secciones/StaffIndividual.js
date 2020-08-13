import React from 'react';
import styled from '@emotion/styled';

const DivP = styled.div`
    width: 100%;
    text-transform: uppercase;
    color: white;
    font-family: 'MonumentExtended';
    text-align: center;
    margin: 4rem auto;
    position: relative;
    h5 {
        font-size: 2.1rem;
        line-height: 0;
        border-bottom: 2rem solid #ff0000;
    }
    p {
        font-family: 'MonumentExtended';
        font-size: 1.6rem;
        margin-top: .8rem;
    }
    @media (min-width: 540px){
        margin: 4rem auto;
        h5 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.8rem;
        }
    }

    @media (min-width: 768px){
        margin: 7rem auto;
        h5 {
            font-size: 2rem;
        }
        p {
            font-size: 1.2rem;
        }
    }
    @media (min-width: 991px){
        p {
            min-height: 48px;
        }
    }
    @media (min-width: 1200px){
        h5 {
            font-size: 2.6rem;
        }
        p {
            font-size: 1.6rem;
        }
    }
    @media (min-width: 1400px){
        h5 {
            font-size: 3rem;
        }
    }
`;

const StaffIndividual = ({nombre, rol, mb0}) => {
    return ( 
        <DivP className={mb0 ? 'mb-0' : null}>
            <h5>{nombre}</h5>
            <p>{rol}</p>
        </DivP>
    );
}
 
export default StaffIndividual;