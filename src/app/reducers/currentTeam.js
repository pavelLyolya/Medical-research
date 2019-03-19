import { current } from '../actions/actionTypes';

const defaultState = {
    isFetching: false,
    error: null,
    team: null,
};

const favoriteTeams = (state = defaultState, action) => {
    switch (action.type) {
        case current.FETCHING_ONE_TEAM:
            return {
                ...state,
                isFetching: true,
            };
        case current.ONE_TEAM_FETCHED:
            return {
                ...state,
                isFetching: false,
                team: action.team,
            };
        case current.DELETE_CURRENT_TEAM:
            return defaultState;
        default:
            return state;
    }
};

export default favoriteTeams;
