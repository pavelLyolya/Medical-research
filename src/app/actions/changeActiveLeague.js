import { activeLeague as a } from './actionTypes';

const changeActiveLeague = id => ({
    type: a.CHANGE_ACTIVE_LEAGUE,
    id,
});

export default changeActiveLeague;
