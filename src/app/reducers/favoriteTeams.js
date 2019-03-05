import { favoriteTeams as f } from '../actions/actionTypes';

const initialState = {
    isFething: false,
    error: null,
    items: [],
};

const favoriteTeams = (state = initialState, action) => {
    switch (action.type) {
        case f.ADD_FAVORITE_TEAM:
            return 1;
        case f.DELETE_FAVORITE_TEAM:
            return 1;
        case f.FETCHING_FAVORITE_TEAMS:
            return {
                ...state,
                isFething: true,
            };
        case f.FAVORITE_TEAMS_FETCHED:
            return {
                ...state,
                isFething: false,
                items: state.items.concat(),
            };
        case f.FETCHING_FAVORITE_TEAMS_ERROR:
            return {
                ...state,
                error: 'FETCHING ERROR',
            };
        default:
            return state;
    }
};

export default favoriteTeams;
