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
    switch (action.type) {
        case l.FETCHING_STANDINGS:
            return 1;
        case l.STANDINGS_FETCHED:
            return 2;
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
