const findLeague = (leaguesArray, id) => {
    const foundLeague = leaguesArray.find(league => league.id === id);
    if (foundLeague) {
        return foundLeague;
    }
    throw Error(`League with id ${id} not found!!!`);
};

export default findLeague;
