import { leagues as leaguesTypes } from '../../src/app/actions/actionTypes';
import leagues from '../../src/app/reducers/leagues';
// import { initialState } from '../../src/app/reducers/leagues';

describe('REDUCER leagues', () => {
    // const team = {
    //     teamId: 143,
    //     name: 'Chelsea',
    // };

    const existingLeague = 2021;
    // const notExistingLeague = 2020;

    test('fetching standings', () => {
        const action = {
            type: leaguesTypes.FETCHING_STANDINGS,
            idLeague: existingLeague,
        };
        const gotState = leagues(undefined, action)
            .find(item => item.id === action.idLeague).standings.isFething;
        const expectedState = true;
        expect(gotState).toEqual(expectedState);
    });

    test('fetching teams', () => {
        const action = {
            type: leaguesTypes.FETCHING_TEAMS,
            idLeague: existingLeague,
        };
        const gotState = leagues(undefined, action)
            .find(item => item.id === action.idLeague).teams.isFething;
        const expectedState = true;
        expect(gotState).toEqual(expectedState);
    });
});
