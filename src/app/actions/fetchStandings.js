import { leagues } from './actionTypes';
import { getAllStandings } from '../services/api';
import { mapObjectsToArrays } from '../services/validation';
import { findObjectOnId } from '../services/functions';

const fetchingStandings = idLeague => ({
    type: leagues.FETCHING_STANDINGS,
    idLeague,
});

const standingsFetched = (idLeague, data) => ({
    type: leagues.STANDINGS_FETCHED,
    idLeague,
    data,
});

const shouldFetchStandings = (state, idLeague) => {
    const foundLeague = findObjectOnId(state.leagues, idLeague);
    if (foundLeague) {
        if (foundLeague.standings.items) {
            return false;
        }
        return true;
    }
    return false;
};

const fetchStandings = id => async (dispatch, getState) => {
    if (shouldFetchStandings(getState(), id)) {
        dispatch(fetchingStandings(id));
        const data = await getAllStandings(id);
        const standingsArray = mapObjectsToArrays(data.standings[0].table);
        dispatch(standingsFetched(id, standingsArray));
    }
};

export default fetchStandings;
