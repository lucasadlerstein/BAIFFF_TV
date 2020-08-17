import axios from 'axios';

const clienteAxiosIn = axios.create({
    baseURL: 'http://api.baifff.tv'
});

export default clienteAxiosIn;