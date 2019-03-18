import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { api } from '../../src/app/services/api';
import { URLS } from '../../src/app/services/constants';
import { leagues } from '../../src/app/actions/actionTypes';
import { mapObjectsToArrays, mapTeamsArray } from '../../src/app/services/validation/index';
import fetchStandings from '../../src/app/actions/fetchStandings';
import fetchTeams from '../../src/app/actions/fetchTeams';
import { initialState } from '../../src/app/reducers/leagues';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    leagues: initialState,
});
let httpMock;

describe('Fetching data from API', () => {
    beforeEach(() => {
        httpMock = new MockAdapter(api);
        store.clearActions();
    });

    const idLeague = 2021;
    let data;

    test('fetches standings', async () => {
        const tableFromApi = [{
            position: 1,
            draw: 7,
            goalDifference: 5,
            goalsAgainst: 5,
            goalsFor: 5,
            lost: 5,
            playedGames: 5,
            points: 5,
            won: 5,
            team: {
                id: 123,
                name: 'Arsenal',
            },
        }];

        data = mapObjectsToArrays(tableFromApi);

        httpMock.onGet(`${URLS.competitions}/${idLeague}${URLS.standings}`)
            .reply(200, { standings: [{ table: tableFromApi }] });

        const expectedActions = [
            {
                type: leagues.FETCHING_STANDINGS,
                idLeague,
            },
            {
                type: leagues.STANDINGS_FETCHED,
                idLeague,
                data,
            },
        ];

        await store.dispatch(fetchStandings(idLeague));
        expect(store.getActions()).toEqual(expectedActions);
    });

    test('fetches teams', async () => {
        const teamsArray = [{
            id: 57,
            name: 'Arsenal',
            shortName: 'Arsenal',
            crestUrl: 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
            isFavorite: false,
        }];

        httpMock.onGet(`${URLS.competitions}/${idLeague}${URLS.teams}`)
            .reply(200, { teams: teamsArray });

        data = mapTeamsArray(teamsArray);

        const expectedActions = [
            {
                type: leagues.FETCHING_TEAMS,
                idLeague,
            },
            {
                type: leagues.TEAMS_FETCHED,
                idLeague,
                data,
            },
        ];

        await store.dispatch(fetchTeams(idLeague));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
