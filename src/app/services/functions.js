export const findObjectOnId = (array, id) => {
    const foundObject = array.find(league => league.id === id);
    if (foundObject) {
        return foundObject;
    }
    throw Error(`Object with id ${id} not found in ${array}!!!`);
};

export const isFavorite = (teamId) => {
    let favoriteTeams = window.localStorage.getItem('favoriteTeams');
    favoriteTeams = JSON.parse(favoriteTeams);
    if (favoriteTeams) {
        return favoriteTeams.some(item => teamId === item.teamId);
    }
    return false;
};

export const addTeamToLocalStorage = (teamId, name, shortName, imgURL, isFavoriteTeam) => {
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
        isFavorite: isFavoriteTeam,
    });
    window.localStorage.setItem('favoriteTeams', JSON.stringify(favoriteTeams));
};

export const deleteTeamFromLocalStorage = (teamId) => {
    let favoriteTeams = window.localStorage.getItem('favoriteTeams');
    if (favoriteTeams) {
        favoriteTeams = JSON.parse(favoriteTeams);
    }
    favoriteTeams = favoriteTeams.filter(team => team.teamId !== teamId);
    window.localStorage.setItem('favoriteTeams', JSON.stringify(favoriteTeams));
};
