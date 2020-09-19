import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://api.baifff.tv'
    // baseURL: 'http://localhost:4000'

});

export default clienteAxios;