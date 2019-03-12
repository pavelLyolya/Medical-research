import { leagues as leaguesActionType } from '../actions/actionTypes';
import findLeague from '../services/functions';

export const initialState = [
    {
        id: 2021,
        name: 'English Premier League',
        standings: {
            isFething: false,
            error: null,
            items: null,
        },
        teams: {
            isFething: false,
            error: null,
            items: null,
        },
    },
    {
        id: 2002,
        name: 'German 1. Bundesliga',
        standings: {
            isFething: false,
            error: null,
            items: null,
        },
        teams: {
            isFething: false,
            error: null,
            items: null,
        },
    },
    {
        id: 2014,
        name: 'Spanish Primera',
        standings: {
            isFething: false,
            error: null,
            items: null,
        },
        teams: {
            isFething: false,
            error: null,
            items: null,
        },
    },
    {
        id: 2019,
        name: 'Italian Serie A',
        standings: {
            isFething: false,
            error: null,
            items: null,
        },
        teams: {
            isFething: false,
            error: null,
            items: null,
        },
    },
    {
        id: 2015,
        name: 'French League 1',
        standings: {
            isFething: false,
            error: null,
            items: null,
        },
        teams: {
            isFething: false,
            error: null,
            items: null,
        },
    },
];

const leagues = (state = initialState, action) => {
    let newState = null;
    let foundLeague = null;
    let standings = null;
    let teams = null;

    switch (action.type) {
        case leaguesActionType.FETCHING_STANDINGS:
            newState = state.slice();
            foundLeague = findLeague(newState, action.idLeague);
            if (foundLeague) {
                foundLeague.standings.isFething = true;
                return newState;
            }
            return state;
        case leaguesActionType.STANDINGS_FETCHED:
            newState = state.slice();
            ({ standings } = findLeague(newState, action.idLeague));
            standings.isFething = false;
            standings.items = action.data;
            return newState;
        case leaguesActionType.FETCHING_TEAMS:
            newState = state.slice();
            foundLeague = findLeague(newState, action.idLeague);
            if (foundLeague) {
                foundLeague.standings.isFething = true;
                return newState;
            }
            return state;
        case leaguesActionType.TEAMS_FETCHED:
            newState = state.slice();
            ({ teams } = findLeague(newState, action.idLeague));
            teams.isFething = false;
            teams.items = action.data;
            return newState;
        default:
            return state;
    }
};

export default leagues;
