import { activeLeague } from './actionTypes';

const changeActiveLeague = id => ({
    type: activeLeague.CHANGE_ACTIVE_LEAGUE,
    id,
});

export default changeActiveLeague;
