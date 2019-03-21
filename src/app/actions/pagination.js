import { teamInfoPagination } from './actionTypes';
import { paginate, countPagesNumber } from '../services/functions';

export const goToNext = () => ({
    type: teamInfoPagination.GO_TO_NEXT,
});

export const goToPrev = () => ({
    type: teamInfoPagination.GO_TO_PREV,
});

export const goToLast = () => ({
    type: teamInfoPagination.GO_TO_LAST,
});

export const goToFirst = () => ({
    type: teamInfoPagination.GO_TO_FIRST,
});

export const changeCountPerPage = count => ({
    type: teamInfoPagination.CHANGE_COUNT_PER_PAGE,
    count,
});

export const setPagesNumber = (array, countPerPage) => {
    const number = countPagesNumber(array, countPerPage);
    return {
        type: teamInfoPagination.SET_PAGES_NUMBER,
        number,
    };
};

export const setPaginated = (array, countPerPage, pageNumber) => {
    const paginatedArray = paginate(array, countPerPage, pageNumber);
    return {
        type: teamInfoPagination.SET_PAGINATED,
        array: paginatedArray,
    };
};

export const clearPagination = () => ({
    type: teamInfoPagination.CLEAR_PAGINATION,
});
