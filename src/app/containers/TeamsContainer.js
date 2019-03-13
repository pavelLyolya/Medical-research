import { connect } from 'react-redux';
import changeActiveLeague from '../actions/changeActiveLeague';
import fetchTeams from '../actions/fetchTeams';
import addFavoriteTeam from '../actions/addFavoriteTeam';
import deleteFavoriteTeam from '../actions/deleteFavoriteTeam';
import toggleShowingFavorites from '../actions/toggleShowingFavorites';
import Teams from '../components/Teams/Teams';

const mapStateToProps = state => ({
    activeLeagueId: state.activeLeagueId,
    leagues: state.leagues,
    isFavoritesShown: state.isFavoritesShown,
});

const mapDispatchToProps = dispatch => ({
    changeActiveLeague: (id) => {
        dispatch(changeActiveLeague(id));
        dispatch(fetchTeams(id));
    },
    fetchTeams: id => dispatch(fetchTeams(id)),
    addFavoriteTeam: (teamId, idLeague) => dispatch(addFavoriteTeam(teamId, idLeague)),
    deleteFavoriteTeam: (teamId, idLeague) => dispatch(deleteFavoriteTeam(teamId, idLeague)),
    toggleShowingFavorites: () => dispatch(toggleShowingFavorites()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
