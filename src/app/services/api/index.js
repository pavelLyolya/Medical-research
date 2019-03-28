import axios from 'axios';
import { URLS } from '../constants';

export const api = axios.create({
    baseURL: 'https://api.football-data.org/v2',
    headers: { 'X-Auth-Token': '16409b6bad8f4c3db1dfb338ff83a7b6' },
});

export const getData = uri => api.get(uri)
    .then(res => res.data);

export const getAllStandings = async (idLeague) => {
    const standings = await getData(`${URLS.competitions}/${idLeague}${URLS.standings}`);
    return standings;
};

export const getAllTeams = async (idLeague) => {
    const teams = await getData(`${URLS.competitions}/${idLeague}${URLS.teams}`);
    return teams;
};

export const getTeam = async (id) => {
    const team = await getData(`${URLS.teams}/${id}`);
    const matches = await getData(`${URLS.teams}/${id}${URLS.matches}`);
    team.fixtures = matches.matches;
    return team;
};

export const getDetails = async (idLeague) => {
    let matches;
    ({ matches } = await getData(`${URLS.competitions}/${idLeague}${URLS.matches}${URLS.season2017}`));
    const allMatches = matches;
    ({ matches } = await getData(`${URLS.competitions}/${idLeague}${URLS.matches}${URLS.season2018}`));
    return allMatches.concat(matches);
};
