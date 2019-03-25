import {
    UPDATE_DATE_TO,
    UPDATE_DATE_FROM,
} from './actionTypes';

export const updateDateTo = dateString => ({
    type: UPDATE_DATE_TO,
    dateString,
});

export const updateDateFrom = dateString => ({
    type: UPDATE_DATE_FROM,
    dateString,
});
