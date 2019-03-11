import { activePage } from '../actions/actionTypes';

const defaultActivePage = 'table';

const activePageName = (state = defaultActivePage, action) => {
    switch (action.type) {
        case activePage.CHANGE_ACTIVE_PAGE:
            return action.pageName;
        default:
            return state;
    }
};

export default activePageName;
