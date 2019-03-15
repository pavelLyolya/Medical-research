import { leagues } from './actionTypes';
import { addTeamToLocalStorage } from '../services/functions';

const addFavoriteTeam = (team, idLeague) => {
    addTeamToLocalStorage(team, idLeague);
    return {
        type: leagues.ADD_FAVORITE_TEAM,
        team: {
            ...team,
            isFavorite: true,
            leagueId: idLeague,
        },
        teamId: team.teamId,
        idLeague,
    };
};

export default addFavoriteTeam;
