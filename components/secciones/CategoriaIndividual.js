import React from 'react';
import styled from '@emotion/styled';

const CategoriaIndividual = ({categoria}) => {

    const UnaCategoria = styled.li`
        list-style: none;
        font-size: 1.8rem;
        font-family: 'MonumentExtended';
        color: black;
        text-transform: uppercase;
        -webkit-text-stroke: .5px white;
        /* text-shadow:
        -1px -1px 0 #ffffff,  
        1px -1px 0 #ffffff,
        -1px 1px 0 #ffffff,
        1px 1px 0 #ffffff; */

        margin: 0;
        padding: 0;
        margin-bottom: 3rem;

        &:before {
            display: block;
            content: '';
            margin-top: -0.3rem;
            background-color: #ff0000;
            background-size: 28px 28px;
            height: 3rem;
            width: 3rem;
            float: left;
            margin-right: -1.5rem;
        }
    `;

    return (
        <UnaCategoria>{categoria}</UnaCategoria>
    );
}
 
export default CategoriaIndividual;