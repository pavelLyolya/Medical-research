import { combineReducers } from 'redux';
import leagues from './leagues';
import activeLeagueId from './activeLeagueId';
import activePageName from './activePageName';
import isFavoritesShown from './isFavoritesShown';
import favoriteTeams from './favoriteTeams';

export default combineReducers({
    activeLeagueId,
    activePageName,
    leagues,
    isFavoritesShown,
    favoriteTeams,
});
