import {
    UPDATE_DATE_TO,
    UPDATE_DATE_FROM,
} from '../actions/actionTypes';

const today = (new Date()).toISOString().substring(0, 10);
let twoWeeksLater = new Date();
twoWeeksLater.setDate(twoWeeksLater.getDate() + 14);
twoWeeksLater = twoWeeksLater.toISOString().substring(0, 10);

const defaultState = {
    dateFrom: today,
    dateTo: twoWeeksLater,
};

const date = (state = defaultState, action) => {
    switch (action.type) {
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
