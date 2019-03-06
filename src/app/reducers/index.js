import { combineReducers } from 'redux';
import favoriteTeams from './favoriteTeams';
import leagues from './leagues';
import activeLeagueId from './activeLeagueId';

export default combineReducers({
    favoriteTeams,
    activeLeagueId,
    leagues,
});
