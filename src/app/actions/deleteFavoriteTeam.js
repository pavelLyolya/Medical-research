import { leagues } from './actionTypes';
import { deleteTeamFromLocalStorage } from '../services/functions';

const deleteFavoriteTeam = (teamId) => {
    const deletingLeagueIndex = deleteTeamFromLocalStorage(teamId);
    return {
        type: leagues.DELETE_FAVORITE_TEAM,
        teamId,
        idLeague: deletingLeagueIndex,
    };
};

export default deleteFavoriteTeam;
