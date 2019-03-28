import { favorites } from '../../src/app/actions/actionTypes';
import favoriteTeams from '../../src/app/reducers/favoriteTeams';

describe('REDUCERS: adding favorite teams', () => {
    const team = {
        teamId: 143,
        name: 'Chelsea',
    };

    test('adds favorite team', () => {
        const action = {
            type: favorites.ADD_FAVORITE_TEAM,
            team,
        };
        const beforeState = [];
        const expectedState = [action.team];
        expect(favoriteTeams(beforeState, action)).toEqual(expectedState);
    });

    test('deletes favorite team', () => {
        const action = {
            type: favorites.DELETE_FAVORITE_TEAM,
            team,
            teamId: team.teamId,
        };
        const beforeState = [team];
        const expectedState = [];
        expect(favoriteTeams(beforeState, action)).toEqual(expectedState);
    });
});
