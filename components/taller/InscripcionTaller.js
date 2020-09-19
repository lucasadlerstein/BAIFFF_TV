import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import styled from '@emotion/styled';
import {withTranslation} from '../../i18n';
import CircularProgress from '@material-ui/core/CircularProgress';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import clienteAxios from '../../config/axios';

const TituloInscripcion = styled.h2`
    text-transform: uppercase;
    color: #ff0000;
    text-align: center;
    margin: 7rem auto 1rem;
    font-size: 5rem;
`;
const TextField = styled.input`
    font-family: 'Raleway';
    border: none;
    border-bottom: 1px solid #ff0000;
    padding: 0 0 0.5rem .1rem;
    color: #ff0000;
    width: 100%;
    font-size: 1.8rem;
    line-height: 21px;
    margin-bottom: 3rem;
    background-color: white;
    
    &::placeholder {
        color: #ff0000;
        opacity: 1;        
    }
    &:focus {
        outline: none;
    }
`;
const SelectP = styled.select`
    font-family: 'Raleway';
    border: none;
    border-bottom: 1px solid #ff0000;
    padding: 0 0 0.5rem .1rem;
    color: #ff0000;
    width: 100%;
    font-size: 1.8rem;
    line-height: 21px;
    margin-bottom: 3rem;
    background-color: white;
    
    &::placeholder {
        color: #ff0000;
        opacity: 1;        
    }
    &:focus {
        outline: none;
    }
`;
const RowGeneral = styled(Row)`
    margin: 0 auto 5rem auto;
    @media (min-width: 991px){
        width: 60%;
    }
`;
const Precio = styled.p`
    text-align: center;
    color: #000000;
    font-size: 1.6rem;
    margin-bottom: 6rem;
`;
const ComprarBoton = styled.button`
    text-transform: uppercase;
    font-family: 'MonumentExtended';
    color: #ff0000;
    border: none;
    font-size: 2rem;
    text-align: right;
    transition: all .3s ease;
    background: none;
    &::after {
        margin-left: 1rem;
        content: '🡒';
        transition: all .3s ease;
    }
    &:hover {
        &::after {
            margin-left: 1.5rem;
        }    
    }
    &:focus {
        outline: none;
    }
`;
const TextoEnviamos = styled.p`
    margin: 2rem auto;
    font-size: 1.8rem;
    text-align: center;

`;
const DatosContenedor = styled.div`
    background-color: #f1f1f1;
    padding: 3rem 4rem;
    margin: 2rem auto 5rem;
    border: 2px solid transparent;
    border-top: 2px solid #000000; 
    border-right: 2px solid #000000; 
    transition: all 1s ease;
    &:hover {
        border: 2px solid transparent;
        border-left: 2px solid #000000; 
        border-bottom: 2px solid #000000; 
    }
`;
const DatosBancarios = styled.p`
    font-size: 1.8rem;
    span {
        font-weight: bold;
        margin-right: 1rem;
    }
`;
const TextoMP = styled.p`
    margin: 2rem auto 5rem;
    font-size: 1.8rem;
    text-align: center;
`;
const MensajeError = styled.p`
    font-size: 1.6rem;
    color: #ff0000;
    margin: 2rem auto;
    text-align: center;
    transition: all .3s ease;
`;
const ContenedorTransferencia = styled.div`
    @media (min-width: 768px){
        width: 70%;
        margin: 0 auto;
    }
    @media (min-width: 991px){
        width: 60%;
    }
`;

const InscripcionTaller = ({taller, t}) => {
    const [error, setError] = useState(null);
    const [estado, setEstado] = useState(null);
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        pais: '',
        fpago: '',
        taller: taller.codigo,
        monto_ars: Number(taller.precio_ars),
        monto_usd: Number(taller.precio_usd),
        pago: 0,
        slug: taller.slug_es
    });

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const estadoGetUrl = urlParams.get('estado');
        if (estadoGetUrl) {
            verificarEstado(estadoGetUrl, urlParams);
        }     
        // eslint-disable-next-line
    }, []);

    function verificarEstado(estadoGetUrl, urlParams) {
        setEstado(estadoGetUrl);
        if(estadoGetUrl === 'success') {
            finPagoMP(1, urlParams);
            const ConfirmacionSwal = withReactContent(Swal);
            ConfirmacionSwal.fire({
                title: t('Inscripcion.Alertas.Aprobado.SwalTitulo'),
                text: t('Inscripcion.Alertas.Aprobado.SwalDesc'),
                icon: 'success'
            });
        } else if (estadoGetUrl === 'pending') {
            finPagoMP(0, urlParams);
            const ConfirmacionSwal = withReactContent(Swal);
            ConfirmacionSwal.fire({
                title: t('Inscripcion.Alertas.Pendiente.SwalTitulo'),
                text: t('Inscripcion.Alertas.Pendiente.SwalDesc'),
                icon: 'warning'
            });
        } else if (estadoGetUrl === 'failure') {
            finPagoMP(0, urlParams);
            const ConfirmacionSwal = withReactContent(Swal);
            ConfirmacionSwal.fire({
                title: t('Inscripcion.Alertas.Erroneo.SwalTitulo'),
                text: t('Inscripcion.Alertas.Erroneo.SwalDesc'),
                icon: 'error'
            });
        }
    }

    const handleChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormulario = e => {
        e.preventDefault();
        // Validacion
        if(usuario.nombre.trim() === '') {
            setError(t('Inscripcion.Errores.Nombre'));
        } else if(usuario.apellido.trim() === '') {
            setError(t('Inscripcion.Errores.Apellido'));
        } else if(usuario.email.trim() === '') {
            setError(t('Inscripcion.Errores.Email'));
        } else if(usuario.pais.trim() === '') {
            setError(t('Inscripcion.Errores.Pais'));
        } else if(usuario.fpago.trim() === '') {
            setError(t('Inscripcion.Errores.Pago'));
        } else {
            if(usuario.fpago === 'MP') {
                try {
                    traerInfoLinkMP();
                    async function traerInfoLinkMP() {
                        await clienteAxios.post('/api/compra/linkMP', usuario).then(resul => {
                            console.log('resul aca! ', resul);
                            window.open(resul.data.initpoint);
                        });
                    }
                } catch (error) {
                    console.log(error);
                }
                
            } else if (usuario.fpago === 'US') {
                pagarUS();
            }
        }
        setTimeout(() => {
            setError(null);
        }, 5000);
    }

    async function pagarUS() {
        try {
            const consulta = await clienteAxios.post('/api/compra/', usuario);
            console.log(consulta);
            setEstado('cargando');
            setTimeout(() => {
                setEstado('US');
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    async function finPagoMP(estado, urlParams) {
        const usuarioQueRetorna = rellenarUsuario(estado, urlParams);
        console.log(usuarioQueRetorna);
        try {
            const consulta = await clienteAxios.post('/api/compra/', usuarioQueRetorna);
            console.log(consulta);
        } catch (error) {
            console.log(error);
        }
    }

    function rellenarUsuario(estado, urlParams) {
        const usuarioRetornado = {
            nombre: urlParams.get('no'),
            apellido: urlParams.get('ap'),
            email: urlParams.get('em'),
            pais: urlParams.get('pa'),
            taller: urlParams.get('ta'),
            fpago: 'MP',
            pago: Number(estado) === 1 ? 1 : 0,
            monto_ars: Number(taller.precio_ars),
            monto_usd: Number(taller.precio_usd),
            slug: taller.slug_es
        }

        return usuarioRetornado; 
    }

    return (
        <Container>
            <TituloInscripcion>{t('Inscripcion.Titulo')}</TituloInscripcion>
            {
                (estado === null) ? (
                <>
                    <Precio>{`AR$${taller.precio_ars} - US$${taller.precio_usd}`}</Precio>
                    <form
                        onSubmit={(e) => enviarFormulario(e)}
                    >
                        <RowGeneral>
                            <Col sm={6}>
                                <TextField value={usuario.nombre} type="text" required placeholder={t('Inscripcion.Form.Nombre')} name="nombre" onChange={(e) => handleChange(e)} />
                            </Col>
                            <Col sm={6}>
                                <TextField value={usuario.apellido} type="text" required placeholder={t('Inscripcion.Form.Apellido')} name="apellido" onChange={(e) => handleChange(e)} />
                            </Col>
                            <Col sm={6}>
                                <TextField value={usuario.email} type="text" required placeholder={t('Inscripcion.Form.Email')} name="email" onChange={(e) => handleChange(e)} />
                            </Col>
                            <Col sm={6}>
                                <TextField value={usuario.pais} type="text" required placeholder={t('Inscripcion.Form.Pais')} name="pais" onChange={(e) => handleChange(e)} />
                            </Col>
                            <Col sm={6}>
                                <SelectP
                                    onChange={(e) => handleChange(e)}
                                    name="fpago"
                                    required
                                    value={usuario.fpago}
                                >
                                <option selected disabled value="">{t('Inscripcion.Form.Pago')}</option>
                                <option value="MP">{t('Inscripcion.Form.Fpago.MP')} - {`(AR$${taller.precio_ars})`}</option>
                                <option value="US">{t('Inscripcion.Form.Fpago.US')} - {`(US$${taller.precio_usd})`}</option>
                                </SelectP>
                            </Col>
                            <Col sm={6} className="text-right">
                                <ComprarBoton
                                    type="submit"
                                >{t('Inscripcion.Form.BtnComprar')}</ComprarBoton>
                            </Col>
                            {
                                error ? (
                                    <Col sm={12}>
                                        <MensajeError>{error}</MensajeError>
                                    </Col>
                                ) : null
                            }
                        </RowGeneral>
                    </form>
                </>
                ) : (
                    (estado === 'cargando') ? (
                        <div style={{textAlign: 'center', margin: '5rem auto 8rem auto'}}>
                            <CircularProgress color="inherit" />
                        </div>
                    ) : (
                        (estado === 'US') ? (
                            <ContenedorTransferencia>
                                <TextoEnviamos>
                                    Te enviamos un email a {usuario.email}.<br />
                                    Para que tu lugar sea confirmado, por favor respondenos ese email adjuntando el comprobante de la transferencia a la siguiente cuenta bancaria:
                                </TextoEnviamos>
                                <DatosContenedor>
                                    <DatosBancarios><span>Nombre</span>Juancito Benitez</DatosBancarios>
                                    <DatosBancarios><span>Cuenta</span>456456564456</DatosBancarios>
                                    <DatosBancarios><span>Referencia</span>{`Masterclass ${taller.codigo} - ${usuario.nombre} ${usuario.apellido}`}</DatosBancarios>
                                    <DatosBancarios><span>Monto</span>U$D {taller.precio_usd}</DatosBancarios>
                                </DatosContenedor>
                            </ContenedorTransferencia>
                        ) : (
                            (estado === 'success' || estado === 'approved') ? (
                                <TextoMP>
                                    {t('Inscripcion.Alertas.Aprobado.Reng1')}<br/>
                                    {t('Inscripcion.Alertas.Aprobado.Reng2')}
                                </TextoMP>
                            ) : (
                                <TextoMP>
                                    {t('Inscripcion.Alertas.Pendiente.Reng1')}<br/>
                                    {t('Inscripcion.Alertas.Pendiente.Reng2')}
                                </TextoMP>
                            )
                        )
                    )
                )
            }            
        </Container>
    );
}
 
export default withTranslation('taller')(InscripcionTaller);