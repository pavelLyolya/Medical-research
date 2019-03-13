import { leagues } from './actionTypes';
import { getAllTeams } from '../services/api';
import { mapTeamsArray } from '../services/validation';
import { findObjectOnId } from '../services/functions';

const fetchingTeams = idLeague => ({
    type: leagues.FETCHING_TEAMS,
    idLeague,
});

const teamsFetched = (idLeague, data) => ({
    type: leagues.TEAMS_FETCHED,
    idLeague,
    data,
});

const shouldFetchTeams = (state, idLeague) => {
    const foundLeague = findObjectOnId(state.leagues, idLeague);
    if (foundLeague) {
        if (foundLeague.teams.items) {
            return false;
        }
        return true;
    }
    return false;
};

const fetchTeams = id => async (dispatch, getState) => {
    if (shouldFetchTeams(getState(), id)) {
        dispatch(fetchingTeams(id));
        const data = await getAllTeams(id);
        const standingsArray = mapTeamsArray(data.teams);
        dispatch(teamsFetched(id, standingsArray));
    }
};

export default fetchTeams;
