import { activePage } from './actionTypes';

const changeActivePage = e => ({
    type: activePage.CHANGE_ACTIVE_PAGE,
    pageName: e.target.textContent,
});

export default changeActivePage;
