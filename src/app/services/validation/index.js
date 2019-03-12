export const mapObjectsToArrays = objectsArray => objectsArray.map(teamStanding => ({
    id: teamStanding.team.id,
    standing: [
        teamStanding.position,
        teamStanding.team.name,
        teamStanding.playedGames,
        teamStanding.won,
        teamStanding.draw,
        teamStanding.lost,
        teamStanding.goalsFor,
        teamStanding.goalsAgainst,
        teamStanding.points,
    ],
}));

export const mapTeamsArray = teams => teams.map(item => ({
    teamId: item.id,
    name: item.name,
    shortName: item.shortName,
    imgURL: item.crestUrl,
}));
