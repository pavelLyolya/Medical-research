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
