import React, {useState} from 'react';
import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';
import { useRouter } from 'next/router';

// Generar un enlace por cada slug
export async function getStaticPaths() {
    const enlaces = await clienteAxios.get('/api/enlaces');
    const paths = enlaces.data.enlaces.map( enlace => ({
        // Aca va un array con los SLUGS
        params: { enlace: enlace.url }
    }))
    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
    const {enlace} = params;
    const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);

    return {
        props: {
            enlace: resultado.data
        },
        unstable_revalidate: 60
    }
}

export default ({enlace}) => {

    const router = useRouter();
    if (router.isFallback) {
      return (
        <div>Cargando...</div>
      )
    }

  
    const [tienePass, setTienePass] = useState(enlace.password);
    const [password, setPassword] = useState('');

    const verificarPassword = async e => {
        e.preventDefault();
        const data = {
            password
        }

        try {
            const resultado = await clienteAxios.post(`/api/enlaces/${enlace.enlace}`, data);
            setTienePass(resultado.data.password)
        } catch (error) {
            mostrarAlerta(error.response.data.msg);
        }
    }

    return (
        <Layout>

        </Layout>
    )

}

