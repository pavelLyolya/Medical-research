import { leagues } from './actionTypes';

const addFavoriteTeam = (teamId, idLeague) => ({
    type: leagues.ADD_FAVORITE_TEAM,
    teamId,
    idLeague,
});

export default addFavoriteTeam;
