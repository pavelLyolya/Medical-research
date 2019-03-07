import { activeLeague } from '../actions/actionTypes';

const defaultActiveLeagueId = 2021;

const activeLeagueId = (state = defaultActiveLeagueId, action) => {
    switch (action.type) {
        case activeLeague.CHANGE_ACTIVE_LEAGUE:
            return action.id;
        default:
            return state;
    }
};

export default activeLeagueId;
