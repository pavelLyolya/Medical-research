import { current } from './actionTypes';
import { getTeam } from '../services/api';

const fetchingTeam = () => ({
    type: current.FETCHING_ONE_TEAM,
});

const TeamFetched = (team, squad, fixtures) => ({
    type: current.ONE_TEAM_FETCHED,
    team,
    squad,
    fixtures,
});

const fetchTeam = id => async (dispatch) => {
    dispatch(fetchingTeam());
    const data = await getTeam(id);
    const team = {
        teamId: data.id,
        name: data.name,
        shortName: data.shortName,
        imgURL: data.crestUrl,
    };
    const squad = data.squad.sort((team1, team2) => {
        if (!team1.shirtNumber) {
            return 1;
        }
        if (!team2.shirtNumber) {
            return -1;
        }
        return team1.shirtNumber - team2.shirtNumber;
    });
    const { fixtures } = data;
    dispatch(TeamFetched(team, squad, fixtures));
};

export default fetchTeam;
