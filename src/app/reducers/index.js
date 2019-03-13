import { combineReducers } from 'redux';
import leagues from './leagues';
import activeLeagueId from './activeLeagueId';
import activePageName from './activePageName';

export default combineReducers({
    activeLeagueId,
    activePageName,
    leagues,
});
