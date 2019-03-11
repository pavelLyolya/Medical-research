import { activePage, pageNames } from '../actions/actionTypes';

const defaultActivePage = pageNames.TABLE;

const activePageName = (state = defaultActivePage, action) => {
    switch (action.type) {
        case activePage.CHANGE_ACTIVE_PAGE:
            return action.pageName;
        default:
            return state;
    }
};

export default activePageName;
