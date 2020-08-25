import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import clienteAxios from '../config/axios';
import {i18n} from '../i18n';

const ElTaller = () => {
    const [taller, setTaller] = useState({
        titulo_es: '',
        titulo_en: '',
        descripcion_en: '',
        descripcion_es: '',
        imagen_es: ''
    });
    useEffect( () => {
        async function traerTaller(taller)  {
            const resul = await clienteAxios.get(`/api/talleres/id/${taller}`);
            setTaller(resul.data);
        }
        traerTaller(3);
        // eslint-disable-next-line
    }, [])

    const Contenido = styled.div`
        width: 100%;
        @media (min-width: 768px){
            display: flex;
        }
    `;
    const Imagen = styled.div`
        width: 100%;
        background-image: ${`url(https://api.baifff.tv/static/${taller.imagen_es});`};
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
            font-size: 3.5rem;
            text-align: center;
            line-height: 86px;
            margin-bottom: .5rem;
            text-transform: uppercase;
        }
        p {
            font-size: 1.8rem;
            line-height: 21px;
            text-align: justify;
        }
        @media (min-width: 540px){
            h3 {
                margin-bottom: 3rem;
                font-size: 4rem;
            }
            p {
                font-size: 1.8rem;
            }
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
            {
                (i18n.language === 'es') ? (
                    <Informacion>
                        <h3>{taller.titulo_es}</h3>    
                        <p>{taller.descripcion_es}</p>
                    </Informacion>
                ) : (
                    <Informacion>
                        <h3>{taller.titulo_en}</h3>    
                        <p>{taller.descripcion_en}</p>
                    </Informacion>
                )
            }
            <Imagen></Imagen>
        </Contenido>
    );
}
 
export default ElTaller;