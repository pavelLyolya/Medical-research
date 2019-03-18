import configureStore from 'redux-mock-store';
import { leagues } from '../../src/app/actions/actionTypes';
import addFavoriteTeam from '../../src/app/actions/addFavoriteTeam';
import deleteFavoriteTeam from '../../src/app/actions/deleteFavoriteTeam';
import { deleteTeamFromLocalStorage } from '../../src/app/services/functions';


const mockStore = configureStore();
const store = mockStore();

describe('favorite teams actions', () => {
    beforeEach(() => {
        store.clearActions();
        localStorage.clear();
    });

    describe('addFavoriteTeam', () => {
        test('Dispatches the correct action and payload', () => {
            const team = {
                teamId: 57,
                name: 'Arsenal',
                shortName: 'Arsenal',
                imgURL: 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
                isFavorite: false,
            };
            const idLeague = 2021;
            const expectedActions = [
                {
                    type: leagues.ADD_FAVORITE_TEAM,
                    team: {
                        ...team,
                        isFavorite: true,
                        leagueId: idLeague,
                    },
                    teamId: team.teamId,
                    idLeague,
                },
            ];

            store.dispatch(addFavoriteTeam(team, idLeague));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('deleteFavoriteTeam', () => {
        test('Dispatches the correct action and payload', () => {
            const teamId = 57;
            const deletingLeagueIndex = deleteTeamFromLocalStorage(teamId);
            const expectedActions = [
                {
                    type: leagues.DELETE_FAVORITE_TEAM,
                    teamId,
                    idLeague: deletingLeagueIndex,
                },
            ];

            store.dispatch(deleteFavoriteTeam(teamId));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
