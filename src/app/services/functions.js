import { FAVORITE_TEAMS_KEY, matchStatusFinished } from './constants';

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

export const isFavorite = (favoriteTeams, teamId) => {
    if (favoriteTeams) {
        return favoriteTeams.some(item => teamId === item.teamId);
    }
    return false;
};

export const getTeamsFromLocalStorage = () => {
    let favoriteTeams = window.localStorage.getItem(FAVORITE_TEAMS_KEY);
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
    window.localStorage.setItem(FAVORITE_TEAMS_KEY, JSON.stringify(favoriteTeams));
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
    window.localStorage.setItem(FAVORITE_TEAMS_KEY, JSON.stringify(favoriteTeams));
    return deletingLeagueIndex;
};

export const paginate = (array, countPerPage, pageNumber) => {
    const pageNum = pageNumber - 1;
    return array.slice(pageNum * countPerPage, (pageNum + 1) * countPerPage);
};

export const countPagesNumber = (array, countPerPage) => Math.ceil(array.length / countPerPage);

export const buildStatistics = (headToHead, firstId, secondId) => {
    const AWAY_TEAM = 'AWAY_TEAM';
    const HOME_TEAM = 'HOME_TEAM';
    const statistics = {
        firstWins: 0,
        secondWins: 0,
        draws: 0,
    };
    headToHead.forEach((match) => {
        if (match.status === matchStatusFinished) {
            if (match.score.winner === HOME_TEAM) {
                if (match.homeTeam.id === firstId) {
                    statistics.firstWins += 1;
                } else if (match.homeTeam.id === secondId) {
                    statistics.secondWins += 1;
                }
            } else if (match.score.winner === AWAY_TEAM) {
                if (match.awayTeam.id === firstId) {
                    statistics.firstWins += 1;
                } else if (match.awayTeam.id === secondId) {
                    statistics.secondWins += 1;
                }
            } else {
                statistics.draws += 1;
            }
        }
    });
    return statistics;
};
