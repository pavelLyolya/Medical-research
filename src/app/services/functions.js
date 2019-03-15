export const findTeamInLeagues = (leaguesArray, leagueId, teamId) => {
    const foundLeague = leaguesArray.find(league => league.id === leagueId);
    if (foundLeague) {
        const foundTeam = foundLeague.teams.items.find(
            team => team.teamId === teamId,
        );
        if (foundTeam) {
            return foundTeam;
        }
    }
    return null;
};

export const isFavorite = (teamId) => {
    let favoriteTeams = window.localStorage.getItem('favoriteTeams');
    favoriteTeams = JSON.parse(favoriteTeams);
    if (favoriteTeams) {
        return favoriteTeams.some(item => teamId === item.teamId);
    }
    return false;
};

export const getTeamsFromLocalStorage = () => {
    let favoriteTeams = window.localStorage.getItem('favoriteTeams');
    if (favoriteTeams) {
        favoriteTeams = JSON.parse(favoriteTeams);
    } else {
        favoriteTeams = [];
    }
    return favoriteTeams;
};

export const addTeamToLocalStorage = (
    team,
    leagueId,
) => {
    const favoriteTeams = getTeamsFromLocalStorage();
    favoriteTeams.push({
        teamId: team.teamId,
        name: team.name,
        shortName: team.shortName,
        imgURL: team.imgURL,
        isFavorite: !team.isFavorite,
        leagueId,
    });
    window.localStorage.setItem('favoriteTeams', JSON.stringify(favoriteTeams));
};

export const deleteTeamFromLocalStorage = (teamId) => {
    let favoriteTeams = getTeamsFromLocalStorage();
    let deletingLeagueIndex;
    favoriteTeams = favoriteTeams.filter((team) => {
        if (team.teamId !== teamId) {
            return true;
        }
        deletingLeagueIndex = team.leagueId;
        return false;
    });
    window.localStorage.setItem('favoriteTeams', JSON.stringify(favoriteTeams));
    return deletingLeagueIndex;
};
