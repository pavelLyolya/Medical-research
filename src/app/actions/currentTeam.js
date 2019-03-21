import { current } from './actionTypes';

export const addCurrentTeam = team => ({
    type: current.ADD_CURRENT_TEAM,
    team,
});

export const deleteCurrentTeam = () => ({
    type: current.DELETE_CURRENT_TEAM,
});
