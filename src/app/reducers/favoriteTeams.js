import { favorites } from '../actions/actionTypes';
import { getTeamsFromLocalStorage } from '../services/functions';

const defaultState = getTeamsFromLocalStorage();

const favoriteTeams = (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case favorites.ADD_FAVORITE_TEAM:
            newState = state.slice();
            newState.push(action.team);
            return newState;
        case favorites.DELETE_FAVORITE_TEAM:
            newState = state.filter(team => team.teamId !== action.teamId);
            return newState;
        default:
            return state;
    }
};

export default favoriteTeams;
