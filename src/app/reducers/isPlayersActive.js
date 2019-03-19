import { TOGGLE_PLAYERS_FIXTURES } from '../actions/actionTypes';

const isPlayersActive = (state = true, action) => {
    switch (action.type) {
        case TOGGLE_PLAYERS_FIXTURES:
            return !state;
        default:
            return state;
    }
};

export default isPlayersActive;
