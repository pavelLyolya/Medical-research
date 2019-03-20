import { connect } from 'react-redux';
import addFavoriteTeam from '../actions/addFavoriteTeam';
import deleteFavoriteTeam from '../actions/deleteFavoriteTeam';
import { addCurrentTeam, deleteCurrentTeam } from '../actions/currentTeam';
import fetchOneTeam from '../actions/fetchOneTeam';
import togglePlayersFixtures from '../actions/togglePlayersFixtures';
import OneTeam from '../components/OneTeam/OneTeam';

const mapStateToProps = state => ({
    activeLeagueId: state.activeLeagueId,
    isPlayersActive: state.isPlayersActive,
    favoriteTeams: state.favoriteTeams,
    currentTeam: state.currentTeam,
});

const mapDispatchToProps = dispatch => ({
    fetchOneTeam: id => dispatch(fetchOneTeam(id)),
    togglePlayersFixtures: () => dispatch(togglePlayersFixtures()),
    addFavoriteTeam: (team, idLeague) => dispatch(addFavoriteTeam(team, idLeague)),
    deleteFavoriteTeam: teamId => dispatch(deleteFavoriteTeam(teamId)),
    addCurrentTeam: team => dispatch(addCurrentTeam(team)),
    deleteCurrentTeam: () => dispatch(deleteCurrentTeam()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OneTeam);
