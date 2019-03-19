import { combineReducers } from 'redux';
import leagues from './leagues';
import activeLeagueId from './activeLeagueId';
import activePageName from './activePageName';
import isFavoritesShown from './isFavoritesShown';
import favoriteTeams from './favoriteTeams';
import isPlayersActive from './isPlayersActive';
import currentTeam from './currentTeam';

export default combineReducers({
    activeLeagueId,
    activePageName,
    leagues,
    isFavoritesShown,
    favoriteTeams,
    isPlayersActive,
    currentTeam,
});
