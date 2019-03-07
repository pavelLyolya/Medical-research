import axios from 'axios';

const URLS = {
    competitions: '/competitions',
    standings: '/standings?standingType=TOTAL',
};

const api = axios.create({
    baseURL: 'https://api.football-data.org/v2',
    headers: { 'X-Auth-Token': '16409b6bad8f4c3db1dfb338ff83a7b6' },
});

export const getData = uri => api.get(uri)
    .then(res => res.data);

export const getAllStandings = async (idLeague) => {
    const standings = await getData(`${URLS.competitions}/${idLeague}/${URLS.standings}`);
    return standings;
};
