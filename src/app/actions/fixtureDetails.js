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

export const clearFixtureDetails = () => ({
    type: fixtDetails.CLEAR_DETAILS,
});

export const updateFixtureDetails = (
    activeItemleagueId,
    activeItemId,
    homeTeamId,
    awayTeamId,
) => async (dispatch) => {
    dispatch(clearFixtureDetails());
    dispatch({
        type: fixtDetails.UPDATE_DETAILS,
        activeItemId,
    });
    dispatch(fetchingFixtureDetails());
    const headToHead = (await getDetails(activeItemleagueId)).filter(
        match => (match.homeTeam.id === homeTeamId && match.awayTeam.id === awayTeamId)
        || (match.homeTeam.id === awayTeamId && match.awayTeam.id === homeTeamId),
    );
    const statistics = buildStatistics(headToHead, homeTeamId, awayTeamId);
    dispatch(fixtureDetailsFetched(statistics, headToHead));
};
