import { leagues as leaguesActionType } from '../actions/actionTypes';

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
    let standings = null;

    switch (action.type) {
        case leaguesActionType.FETCHING_STANDINGS:
            newState = state.slice();
            newState.find(league => league.id === action.idLeague).standings.isFething = true;
            return newState;
        case leaguesActionType.STANDINGS_FETCHED:
            newState = state.slice();
            ({ standings } = newState.find(league => league.id === action.idLeague));
            standings.isFething = false;
            standings.items = action.data;
            return newState;
        default:
            return state;
    }
};

export default leagues;
