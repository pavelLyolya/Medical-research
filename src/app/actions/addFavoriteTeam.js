import { favorites } from './actionTypes';
import { addTeamToLocalStorage } from '../services/functions';

const addFavoriteTeam = (team, idLeague) => {
    addTeamToLocalStorage(team, idLeague);
    return {
        type: favorites.ADD_FAVORITE_TEAM,
        team: {
            ...team,
            leagueId: idLeague,
        },
        idLeague,
    };
};

export default addFavoriteTeam;
