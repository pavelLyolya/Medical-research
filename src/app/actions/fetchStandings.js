import { leagues } from './actionTypes';
import getData from '../services/api';
import mapObjectsToArrays from '../services/validation';

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
    const fetchedLeagueItems = state.leagues.find(league => league.id === idLeague).standings.items;
    if (fetchedLeagueItems) {
        return false;
    }
    return true;
};

const fetchStandings = id => async (dispatch, getState) => {
    if (shouldFetchStandings(getState(), id)) {
        dispatch(fetchingStandings(id));
        const data = await getData(`/competitions/${id}/standings?standingType=TOTAL`);
        const standingsArray = mapObjectsToArrays(data.standings[0].table);
        dispatch(standingsFetched(id, standingsArray));
    }
};

export default fetchStandings;
