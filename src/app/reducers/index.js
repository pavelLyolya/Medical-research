import { combineReducers } from 'redux';
import favoriteTeams from './favoriteTeams';
import leagues from './leagues';
import activeLeague from './activeLeague';

export default combineReducers({
    favoriteTeams,
    activeLeague,
    leagues,
});
