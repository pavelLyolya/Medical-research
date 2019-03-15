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

export const addTeamToLocalStorage = (
    teamId,
    name,
    shortName,
    imgURL,
    isFavoriteTeam,
    leagueId,
) => {
    let favoriteTeams = window.localStorage.getItem('favoriteTeams');
    if (favoriteTeams) {
        favoriteTeams = JSON.parse(favoriteTeams);
    } else {
        favoriteTeams = [];
    }
    favoriteTeams.push({
        teamId,
        name,
        shortName,
        imgURL,
        isFavorite: !isFavoriteTeam,
        leagueId,
    });
    window.localStorage.setItem('favoriteTeams', JSON.stringify(favoriteTeams));
};

export const deleteTeamFromLocalStorage = (teamId) => {
    let favoriteTeams = window.localStorage.getItem('favoriteTeams');
    if (favoriteTeams) {
        favoriteTeams = JSON.parse(favoriteTeams);
    }
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
