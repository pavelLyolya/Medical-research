import { combineReducers } from 'redux';
import favoriteTeams from './favoriteTeams';
import leagues from './leagues';
import activeLeagueId from './activeLeagueId';
import activePageName from './activePageName';

export default combineReducers({
    favoriteTeams,
    activeLeagueId,
    activePageName,
    leagues,
});
