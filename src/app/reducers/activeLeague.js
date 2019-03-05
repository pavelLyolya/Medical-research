import { activeLeague as a } from '../actions/actionTypes';

const activeLeague = (state = 2021, action) => {
    switch (action.type) {
        case a.CHANGE_ACTIVE_LEAGUE:
            return action.id;
        default:
            return state;
    }
};

export default activeLeague;
