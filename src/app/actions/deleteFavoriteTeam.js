import { favorites } from './actionTypes';
import { deleteTeamFromLocalStorage } from '../services/functions';

const deleteFavoriteTeam = (teamId) => {
    const deletingLeagueIndex = deleteTeamFromLocalStorage(teamId);
    return {
        type: favorites.DELETE_FAVORITE_TEAM,
        teamId,
        idLeague: deletingLeagueIndex,
    };
};

export default deleteFavoriteTeam;
