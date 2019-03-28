import {
    activePage,
    activeLeague,
    TOGGLE_SHOWING_FAVORITES,
} from '../../src/app/actions/actionTypes';
import { pageNames } from '../../src/app/services/constants';
import activeLeagueId from '../../src/app/reducers/activeLeagueId';
import activePageName from '../../src/app/reducers/activePageName';
import isFavoritesShown from '../../src/app/reducers/isFavoritesShown';

describe('REDUCERS: Toggling pages and so on...', () => {
    test('changing active league id', () => {
        const action = {
            type: activeLeague.CHANGE_ACTIVE_LEAGUE,
            id: 2020,
        };
        const expectedState = action.id;
        expect(activeLeagueId(undefined, action)).toEqual(expectedState);
    });

    test('changing active page name', () => {
        const action = {
            type: activePage.CHANGE_ACTIVE_PAGE,
            pageName: pageNames.TABLE,
        };
        const expectedState = action.pageName;
        expect(activePageName(undefined, action)).toEqual(expectedState);
    });

    test('changing favorites activity name', () => {
        const action = {
            type: TOGGLE_SHOWING_FAVORITES,
        };
        const expectedState = true;
        expect(isFavoritesShown(undefined, action)).toEqual(expectedState);
    });
});
