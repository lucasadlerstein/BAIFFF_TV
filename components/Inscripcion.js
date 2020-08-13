import React, {useState} from 'react';
import styled from '@emotion/styled';
import TituloSeccion from './ui/TituloSeccion';
import { Container, Row, Col} from 'reactstrap';
import Pasos from './inscripcion/Pasos';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import clienteAxios from '../config/axios';

const Contenedor = styled(Container)`
    padding: 5rem 0 3rem 0;
    @media (min-width: 768px){
        padding-top: 10rem;
    }
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
    
    &::placeholder {
        color: #ff0000;
        opacity: 1;        
    }
    &:focus {
        outline: none;
    }
`;

const RowPersonalizada = styled(Row)`
    margin: 3rem auto 2rem auto;
    @media (min-width: 768px){
        margin: 8rem auto;
    }
`;
const BotonUI = styled.button`
    text-transform: uppercase;
    font-size: 1.8rem;
    padding: 1.5rem 5rem;
    font-family: 'MonumentExtended', sans-serif;
    text-decoration: none;
    background-color: #FF0000;
    color: #FFFFFF;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all .3s ease;
    margin: 0 auto;

    &:hover {
        background-color: #FFFFFF;
        color: #FF0000;
        border: 2px solid #FF0000;
    }

    &:focus {
        outline: none;
    }
    @media (max-width: 768px){
        padding: 1.5rem 8rem;
    }
`;
const MensajeError = styled.p`
    color: #ff0000;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1rem;
    max-width: 245px;
    @media (max-width: 768px){
        margin: 1rem auto;
    }
`;
const BotonBlanco = styled(BotonUI)`
    background-color:white;
    border: 2px solid #ff0000;
    color: #ff0000;
    transition: all .3s ease;
    &:hover {
        background-color: #ff0000;
        border: 2px solid transparent;
        color: white;
    }
`;
const ContenedorBoton = styled.div`
    @media (max-width: 768px){
        margin: 0 auto;
        text-align: center;
    }
`;
const MuiAlertP = styled(MuiAlert)`
    font-size: 1.6rem;
`;
const ATerminos  = styled.a`
    color: black;
    font-weight: bold;
    text-decoration-color: black;
    &:hover {
        color: #ff0000;
        text-decoration-color: #ff0000;
    }
`;

const Inscripcion = () => {
    const [ tyc, setTyc ] = useState(false);
    const [ enviado, setEnviado ] = useState(null);
    const [ open, setOpen ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ etapa, setEtapa ] = useState(1);
    const [ publicitario, setPublicitario ] = useState(null);
    const [ formulario, setFormulario ] = useState({
        // Inscribe
        i_nombre: '',
        i_telefono: '',
        i_email: '',
        i_cargo: '',
        
        // Director:
        d_nombre: '',
        d_nacionalidad: '',
        d_nacimiento: '',
        d_tipo: '',
        d_website: '',
        d_facebook: '',
        d_instagram: '',
        d_email: '',

        // Film:
        nombre: '',
        tipo: '',
        fin: '',
        year: '',
        duracion: '',
        musica: '',
        link: '',
        pais: '',
        pass: '',
    });

    const handleChange = (e) => {
        if (e.target.name === 'publicitario') {
            if (e.target.value === 'publicitario') {
                setPublicitario('publicitario');
            } else if (e.target.value === 'Artistico') {
                setFormulario({
                    ...formulario,
                    [e.target.name]: e.target.value
                });
                setPublicitario(null);
            }
        } else {
            setFormulario({
                ...formulario,
                [e.target.name]: e.target.value
            });
        }
    }

    const onFocusDate = () => { document.querySelector('#nacimientoDirector').type = 'date'; }
    const onBlurDate = () => { document.querySelector('#nacimientoDirector').type = 'text'; }

    const onChangeTerminos = (e) => {
        setTyc(e.target.checked);
    }

    const cambiarEtapa = () => {
        let nuevaEtapa = etapa;
        if (etapa === 1) {
            if( (formulario.i_nombre).trim() === '' ||
                (formulario.i_telefono).trim() === '' ||
                (formulario.i_email).trim() === '' ||
                (formulario.i_cargo).trim() === '') {
                setError('Todos los campos son obligatorios');
            } else {
                setError(null);
                nuevaEtapa = etapa + 1;
            }
        } else if (etapa === 2) {
            if( (formulario.d_nombre).trim() === '' ||
                (formulario.d_nacionalidad).trim() === '' ||
                (formulario.d_nacimiento).trim() === '' ||
                (formulario.d_tipo).trim() === '' ||
                (formulario.d_website).trim() === '' ||
                (formulario.d_facebook).trim() === '' ||
                (formulario.d_instagram).trim() === '' ||
                (formulario.d_email).trim() === '') {
                setError('Todos los campos son obligatorios');    
            } else {
                setError(null);
                nuevaEtapa = etapa + 1;
            }
        } 
        setTimeout(() => {
            setError(null);
        }, 3000);
        setEtapa(nuevaEtapa);
    }

    const enviarFormulario = async (e) => {
        e.preventDefault();
        // Validar
        if( (formulario.nombre).trim() === '' ||
            (formulario.tipo).trim() === '' ||
            (formulario.fin).trim() === '' ||
            (formulario.year).trim() === '' ||
            (formulario.duracion).trim() === '' ||
            (formulario.musica).trim() === '' ||
            (formulario.link).trim() === '' ||
            (formulario.pais).trim() === '' || 
            (formulario.pass).trim() === '') {
                setError('Todos los campos son obligatorios'); 
                setTimeout(() => {
                    setError(null);
                }, 3000);  
        } else {
            console.log('tyc ', tyc);
            if(tyc === false) {
                setError('Los términos y condiciones son obligatorios');
                setTimeout(() => {
                    setError(null);
                }, 4000);
            } else {
                try {
                    // Enviar form
                    const enviarForm = await clienteAxios.post('/api/films/', formulario);
                    console.log(enviarForm);

                    // Avisar que se envio el form
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false);
                    }, 3000);

                    // Enviado
                    setEnviado(true);
                } catch (error) {
                    console.log(error);
                }
            }    
        }
    }

    const inscribirOtro = () => {
        console.log('inscribirOtro');
        setEtapa(1);
        setEnviado(null);
        setTyc(false);

        setFormulario({
            ...formulario,
            nombre: '',
            tipo: '',
            fin: '',
            year: '',
            duracion: '',
            musica: '',
            link: '',
            pais: '',
            pass: ''
        });

    }

    const labelCheckTerminos = <p className="m-0">
        He leído y acepto los <ATerminos href="/terms/BASES_Y_CONDICIONES_BAIFFF2020.pdf" target="_blank">términos y condiciones.</ATerminos>
    </p>; 

    return (
        <Contenedor>
            <TituloSeccion texto={'Inscripción'} tamano={'7.2rem'} />
            <RowPersonalizada>
                <Col sm={12} md={4}>
                    <Pasos actual={etapa} />
                </Col>
                <Col sm={12} md={7}>
                    <form
                        onSubmit={(e) => enviarFormulario(e)}
                    >
                        {
                            (etapa === 1) ? (
                                <Row>
                                    <Col sm={6}>
                                        <TextField value={formulario.i_nombre} type="text" required placeholder="Nombre y apellido" name="i_nombre" onChange={(e) => handleChange(e)} />
                                        <TextField value={formulario.i_telefono} type="number" required placeholder="Teléfono" name="i_telefono" onChange={(e) => handleChange(e)} />
                                        <TextField value={formulario.i_email} type="email" required placeholder="Email" name="i_email" onChange={(e) => handleChange(e)} />
                                        <TextField value={formulario.i_cargo} type="text" required placeholder="Cargo dentro del film" name="i_cargo" onChange={(e) => handleChange(e)} />
                                    </Col>
                                </Row>
                            ) : (
                                (etapa === 2) ? (
                                    <Row>
                                        <Col>
                                            <TextField value={formulario.d_nombre} type="text" required placeholder="Nombre y apellido" name="d_nombre" onChange={(e) => handleChange(e)} />
                                            <TextField value={formulario.d_nacimiento} type="text" onFocus={() => onFocusDate()} id="nacimientoDirector" onBlur={() => onBlurDate()} required placeholder="Fecha de nacimiento" name="d_nacimiento" onChange={(e) => handleChange(e)} />
                                            <TextField value={formulario.d_nacionalidad} type="text" required placeholder="Nacionalidad" name="d_nacionalidad" onChange={(e) => handleChange(e)} />
                                            <SelectP
                                                onChange={(e) => handleChange(e)}
                                                name="d_tipo"
                                                required
                                                value={formulario.d_tipo}
                                            >
                                            <option selected disabled value="">Tipo de artista</option>
                                            <option value="Profesional">Profesional</option>
                                            <option value="Independiente">Independiente</option>
                                            </SelectP>
                                        </Col>
                                        <Col>
                                            <TextField value={formulario.d_website} type="text" placeholder="Website" name="d_website" onChange={(e) => handleChange(e)} />
                                            <TextField value={formulario.d_facebook} type="text" placeholder="Facebook" name="d_facebook" onChange={(e) => handleChange(e)} />
                                            <TextField value={formulario.d_instagram} type="text" placeholder="Instagram" name="d_instagram" onChange={(e) => handleChange(e)} />
                                            <TextField value={formulario.d_email} type="email" required placeholder="Email" name="d_email" onChange={(e) => handleChange(e)} />
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row>
                                        <Col>
                                            <TextField value={formulario.nombre} type="text" required placeholder="Nombre del Film" name="nombre" onChange={(e) => handleChange(e)} />

                                            <SelectP
                                                onChange={(e) => handleChange(e)}
                                                required
                                                name="tipo"
                                                value={formulario.tipo}
                                            >
                                            <option selected disabled value="">Tipo de film</option>
                                            <option value="Fashion Film">Fashion Film</option>
                                            <option value="Videoclip">Videoclip</option>
                                            <option value="Contenido Digital Corto">Contenido Digital Corto</option>
                                            </SelectP>

                                            <SelectP
                                                onChange={(e) => handleChange(e)}
                                                required
                                                name="musica"
                                                value={formulario.musica}
                                            >
                                            <option selected disabled value="">Música original</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                            </SelectP>
                                            <TextField value={formulario.pais} type="text" required placeholder="País" name="pais" onChange={(e) => handleChange(e)} />
                                            <FormControlLabel
                                                value="terminos"
                                                control={<Checkbox
                                                    onChange={(e) => onChangeTerminos(e)}
                                                    id="terminosycondiciones"
                                                    color="default" size="medium" />}
                                                label={labelCheckTerminos}
                                                labelPlacement="end"
                                                required
                                                />
                                        </Col>
                                        <Col>
                                            <SelectP
                                                onChange={(e) => handleChange(e)}
                                                required
                                                name="publicitario"
                                            >
                                            <option selected disabled value="">Fines del Film</option>
                                            <option value="Artistico">Artísticos</option>
                                            <option value="publicitario">Publicitarios</option>
                                            </SelectP>
                                            {
                                                (publicitario === 'publicitario') ? (
                                                    <TextField value={formulario.fin} type="text" placeholder="Marca" name="fin" onChange={(e) => handleChange(e)} />
                                                ) : null
                                            }
                                            <Row>
                                                <Col>
                                                    <TextField value={formulario.year} type="text" placeholder="Año de estreno" name="year" onChange={(e) => handleChange(e)} />
                                                </Col>
                                                <Col>
                                                    <TextField value={formulario.duracion} type="text" placeholder="Duracion" name="duracion" onChange={(e) => handleChange(e)} />
                                                </Col>
                                            </Row>
                                            <TextField value={formulario.link} type="text" required placeholder="Link" name="link" onChange={(e) => handleChange(e)} />
                                            <TextField value={formulario.pass} type="text" placeholder="Contraseña" name="pass" onChange={(e) => handleChange(e)} />
                                        </Col>
                                    </Row>
                                )
                            )
                        }
                        {
                            (etapa === 3) ? (
                                <>
                                    {
                                    enviado ? (
                                        <BotonBlanco
                                            type="button"
                                            onClick={() => inscribirOtro()}
                                        >Publicar otro film</BotonBlanco>
                                        ) : (
                                            <ContenedorBoton>
                                                <BotonUI
                                                    type="submit"
                                                >Enviar Inscripción</BotonUI>
                                                {error ? <MensajeError>{error}</MensajeError> : null}
                                            </ContenedorBoton>
                                        )
                                    }
                                </>
                            ) : (
                                <ContenedorBoton>
                                    <BotonUI
                                        type="button"
                                        onClick={() => cambiarEtapa()}
                                    >Siguiente ❯</BotonUI>
                                    {error ? <MensajeError>{error}</MensajeError> : null}
                                </ContenedorBoton>
                            )
                        }
                        <Snackbar open={open} autoHideDuration={4000}>
                            <MuiAlertP severity="success">
                            Film inscripto con éxito
                            </MuiAlertP>
                        </Snackbar>
                    </form>
                </Col>
            </RowPersonalizada>
        </Contenedor>
    );
}
 
export default Inscripcion;