import {
    UPDATE_DATE_TO,
    UPDATE_DATE_FROM,
    SET_DEFAULT_DATES,
} from '../actions/actionTypes';

const defaultState = {
    dateFrom: null,
    dateTo: null,
};

const date = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DEFAULT_DATES:
            return {
                dateFrom: action.dateFrom,
                dateTo: action.dateTo,
            };
        case UPDATE_DATE_TO:
            return {
                ...state,
                dateTo: action.dateString,
            };
        case UPDATE_DATE_FROM:
            return {
                ...state,
                dateFrom: action.dateString,
            };
        default:
            return state;
    }
};

export default date;
