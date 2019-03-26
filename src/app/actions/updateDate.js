import {
    UPDATE_DATE_TO,
    UPDATE_DATE_FROM,
    SET_DEFAULT_DATES,
} from './actionTypes';

export const setDefaultDates = () => {
    const dateFrom = (new Date()).toISOString().substring(0, 10);
    let dateTo = new Date();
    dateTo.setDate(dateTo.getDate() + 14);
    dateTo = dateTo.toISOString().substring(0, 10);

    return {
        type: SET_DEFAULT_DATES,
        dateFrom,
        dateTo,
    };
};

export const updateDateTo = dateString => ({
    type: UPDATE_DATE_TO,
    dateString,
});

export const updateDateFrom = dateString => ({
    type: UPDATE_DATE_FROM,
    dateString,
});
