import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.football-data.org/v2',
    headers: { 'X-Auth-Token': '16409b6bad8f4c3db1dfb338ff83a7b6' },
});

export default api;
