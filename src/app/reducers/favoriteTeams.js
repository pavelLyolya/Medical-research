import { favorites } from '../actions/actionTypes';
import { getTeamsFromLocalStorage } from '../services/functions';

const defaultState = getTeamsFromLocalStorage();

const favoriteTeams = (state = defaultState, action) => {
    switch (action.type) {
        case favorites.ADD_FAVORITE_TEAM:
            return [...state, action.team];
        case favorites.DELETE_FAVORITE_TEAM:
            return state.filter(team => team.teamId !== action.teamId);
        default:
            return state;
    }
};

export default favoriteTeams;
