import configureStore from 'redux-mock-store';
import {
    activePage,
    activeLeague,
    TOGGLE_SHOWING_FAVORITES,
} from '../../src/app/actions/actionTypes';
import changeActivePage from '../../src/app/actions/changeActivePage';
import toggleShowingFavorites from '../../src/app/actions/toggleShowingFavorites';
import changeActiveLeague from '../../src/app/actions/changeActiveLeague';

const mockStore = configureStore();
const store = mockStore();

describe('ACTIONS: Toggling pages and so on...', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('changes active page', () => {
        const pageName = 'table';
        const expectedActions = [
            {
                type: activePage.CHANGE_ACTIVE_PAGE,
                pageName,
            },
        ];
        store.dispatch(changeActivePage(pageName));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('changes active league', () => {
        const leagueId = 10;
        const expectedActions = [
            {
                type: activeLeague.CHANGE_ACTIVE_LEAGUE,
                id: leagueId,
            },
        ];
        store.dispatch(changeActiveLeague(leagueId));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('toggles showing favorites', () => {
        const expectedActions = [
            {
                type: TOGGLE_SHOWING_FAVORITES,
            },
        ];
        store.dispatch(toggleShowingFavorites());
        expect(store.getActions()).toEqual(expectedActions);
    });
});
