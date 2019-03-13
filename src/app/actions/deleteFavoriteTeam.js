import { leagues } from './actionTypes';

const deleteFavoriteTeam = (teamId, idLeague) => ({
    type: leagues.DELETE_FAVORITE_TEAM,
    teamId,
    idLeague,
});

export default deleteFavoriteTeam;
