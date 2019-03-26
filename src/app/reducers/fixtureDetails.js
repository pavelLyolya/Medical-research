import { fixtDetails } from '../actions/actionTypes';

const defaultState = {
    isActive: false,
    activeItemId: null,
    isFetching: false,
    headToHead: null,
    statistics: null,
};

const fixtureDetails = (state = defaultState, action) => {
    switch (action.type) {
        case fixtDetails.UPDATE_DETAILS:
            return {
                ...state,
                isActive: true,
                activeItemId: action.activeItemId,
            };
        case fixtDetails.FETCHING_FIXTURE_DETAILS:
            return {
                ...state,
                isFetching: true,
            };
        case fixtDetails.FIXTURE_DETAILS_FETCHED:
            return {
                ...state,
                isFetching: false,
                headToHead: action.headToHead,
                statistics: action.statistics,
            };
        case fixtDetails.CLEAR_DETAILS:
            return defaultState;
        default:
            return state;
    }
};

export default fixtureDetails;
