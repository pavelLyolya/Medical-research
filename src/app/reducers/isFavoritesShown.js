import { TOGGLE_SHOWING_FAVORITES } from '../actions/actionTypes';

const isFavoritesShown = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_SHOWING_FAVORITES:
            return !state;
        default:
            return state;
    }
};

export default isFavoritesShown;
