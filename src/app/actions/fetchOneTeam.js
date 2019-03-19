import { current } from './actionTypes';
import { getOneTeam } from '../services/api';

const fetchingOneTeam = () => ({
    type: current.FETCHING_ONE_TEAM,
});

const oneTeamFetched = team => ({
    type: current.ONE_TEAM_FETCHED,
    team,
});

const fetchOneTeam = id => async (dispatch) => {
    dispatch(fetchingOneTeam());
    const data = await getOneTeam(id);
    const team = {
        teamId: data.id,
        name: data.name,
        shortName: data.shortName,
        imgURL: data.crestUrl,
        squad: data.squad.sort((team1, team2) => {
            if (!team1.shirtNumber) {
                return 1;
            }
            if (!team2.shirtNumber) {
                return -1;
            }
            return team1.shirtNumber - team2.shirtNumber;
        }),
    };
    dispatch(oneTeamFetched(team));
};

export default fetchOneTeam;
