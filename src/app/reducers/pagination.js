import { teamInfoPagination } from '../actions/actionTypes';

const defaultState = {
    itemsPerPage: 5,
    pagesNumber: null,
    currentPage: 1,
    entities: [],
};

const pagination = (state = defaultState, action) => {
    switch (action.type) {
        case teamInfoPagination.GO_TO_FIRST:
            return {
                ...state,
                currentPage: 1,
            };
        case teamInfoPagination.GO_TO_PREV:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            };
        case teamInfoPagination.GO_TO_NEXT:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        case teamInfoPagination.GO_TO_LAST:
            return {
                ...state,
                currentPage: state.pagesNumber,
            };
        case teamInfoPagination.CHANGE_COUNT_PER_PAGE:
            return {
                ...state,
                itemsPerPage: action.count,
                currentPage: 1,
            };
        case teamInfoPagination.SET_PAGES_NUMBER:
            return {
                ...state,
                pagesNumber: action.number,
            };
        case teamInfoPagination.SET_PAGINATED:
            return {
                ...state,
                entities: action.array,
            };
        case teamInfoPagination.CLEAR_PAGINATION:
            return defaultState;
        default:
            return state;
    }
};

export default pagination;
