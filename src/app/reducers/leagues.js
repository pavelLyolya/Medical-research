import { leagues as l } from '../actions/actionTypes';

const initialState = [
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
        case l.FETCHING_STANDINGS:
            newState = state.slice();
            newState.find(league => league.id === action.idLeague).standings.isFething = true;
            return newState;
        case l.STANDINGS_FETCHED:
            newState = state.slice();
            ({ standings } = newState.find(league => league.id === action.idLeague));
            standings.isFething = false;
            standings.items = action.data;
            return newState;
        case l.FETCHING_STANDINGS_ERROR:
            return 3;
        case l.FETCHING_TEAMS:
            return 4;
        case l.TEAMS_FETCHED:
            return 5;
        case l.FETCHING_TEAMS_ERROR:
            return 6;
        default:
            return state;
    }
};

export default leagues;
