import { connect } from 'react-redux';
import changeActiveLeague from '../actions/changeActiveLeague';
import changeActivePage from '../actions/changeActivePage';
import { pageNames } from '../services/constants';
import fetchTeams from '../actions/fetchTeams';
import addFavoriteTeam from '../actions/addFavoriteTeam';
import deleteFavoriteTeam from '../actions/deleteFavoriteTeam';
import toggleShowingFavorites from '../actions/toggleShowingFavorites';
import Teams from '../components/Teams/Teams';

const mapStateToProps = state => ({
    activeLeagueId: state.activeLeagueId,
    leagues: state.leagues,
    isFavoritesShown: state.isFavoritesShown,
    favoriteTeams: state.favoriteTeams,
});

const mapDispatchToProps = dispatch => ({
    activateTeams: () => dispatch(changeActivePage(pageNames.TEAMS)),
    changeActiveLeague: (id) => {
        dispatch(changeActiveLeague(id));
        dispatch(fetchTeams(id));
    },
    fetchTeams: id => dispatch(fetchTeams(id)),
    addFavoriteTeam: (team, idLeague) => dispatch(addFavoriteTeam(team, idLeague)),
    deleteFavoriteTeam: teamId => dispatch(deleteFavoriteTeam(teamId)),
    toggleShowingFavorites: () => dispatch(toggleShowingFavorites()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
