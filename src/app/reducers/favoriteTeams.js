import { favoriteTeams as favoriteTeamsActionType } from '../actions/actionTypes';

const initialState = {
    isFething: false,
    error: null,
    items: [],
};

const favoriteTeams = (state = initialState, action) => {
    switch (action.type) {
        case favoriteTeamsActionType.FETCHING_FAVORITE_TEAMS:
            return {
                ...state,
                isFething: true,
            };
        case favoriteTeamsActionType.FAVORITE_TEAMS_FETCHED:
            return {
                ...state,
                isFething: false,
                items: state.items.concat(),
            };
        case favoriteTeamsActionType.FETCHING_FAVORITE_TEAMS_ERROR:
            return {
                ...state,
                error: 'FETCHING ERROR',
            };
        default:
            return state;
    }
};

export default favoriteTeams;
