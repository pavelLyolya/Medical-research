import { connect } from 'react-redux';
import addFavoriteTeam from '../actions/addFavoriteTeam';
import deleteFavoriteTeam from '../actions/deleteFavoriteTeam';
import { addCurrentTeam, deleteCurrentTeam } from '../actions/currentTeam';
import fetchTeam from '../actions/fetchTeam';
import togglePlayersFixtures from '../actions/togglePlayersFixtures';
import { clearFixtureDetails } from '../actions/fixtureDetails';
import Team from '../components/Team/Team';
import { clearPagination } from '../actions/pagination';

const mapStateToProps = state => ({
    activeLeagueId: state.activeLeagueId,
    isPlayersActive: state.isPlayersActive,
    isFavoritesShown: state.isFavoritesShown,
    favoriteTeams: state.favoriteTeams,
    currentTeam: state.currentTeam.team,
    entities: state.pagination.entities,
    fixtureDetails: state.fixtureDetails,
});

const mapDispatchToProps = dispatch => ({
    fetchTeam: (id, teamId) => dispatch(fetchTeam(id, teamId)),
    togglePlayersFixtures: () => dispatch(togglePlayersFixtures()),
    addFavoriteTeam: (team, idLeague) => dispatch(addFavoriteTeam(team, idLeague)),
    deleteFavoriteTeam: teamId => dispatch(deleteFavoriteTeam(teamId)),
    addCurrentTeam: team => dispatch(addCurrentTeam(team)),
    deleteCurrentTeam: () => dispatch(deleteCurrentTeam()),
    clearPagination: () => dispatch(clearPagination()),
    clearFixtureDetails: () => dispatch(clearFixtureDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
