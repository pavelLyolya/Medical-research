import { activePage } from './actionTypes';

const changeActivePage = pageName => ({
    type: activePage.CHANGE_ACTIVE_PAGE,
    pageName,
});

export default changeActivePage;
