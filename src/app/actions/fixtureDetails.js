import { fixtDetails } from './actionTypes';
import { getDetails } from '../services/api';
import { buildStatistics } from '../services/functions';

const fetchingFixtureDetails = () => ({
    type: fixtDetails.FETCHING_FIXTURE_DETAILS,
});

const fixtureDetailsFetched = (statistics, headToHead) => ({
    type: fixtDetails.FIXTURE_DETAILS_FETCHED,
    statistics,
    headToHead,
});

export const updateFixtureDetails = (
    leagueId,
    activeItemId,
    firstId,
    secondId,
) => async (dispatch) => {
    dispatch({
        type: fixtDetails.UPDATE_DETAILS,
        activeItemId,
    });
    dispatch(fetchingFixtureDetails());
    const headToHead = (await getDetails(leagueId)).filter(
        match => (match.homeTeam.id === firstId && match.awayTeam.id === secondId)
        || (match.homeTeam.id === secondId && match.awayTeam.id === firstId),
    );
    const statistics = buildStatistics(headToHead, firstId, secondId);
    dispatch(fixtureDetailsFetched(statistics, headToHead));
};

export const clearFixtureDetails = () => ({
    type: fixtDetails.CLEAR_DETAILS,
});
