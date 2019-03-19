import { connect } from 'react-redux';
import addFavoriteTeam from '../actions/addFavoriteTeam';
import deleteFavoriteTeam from '../actions/deleteFavoriteTeam';
import togglePlayersFixtures from '../actions/togglePlayersFixtures';
import OneTeam from '../components/OneTeam/OneTeam';

const mapStateToProps = state => ({
    activeLeagueId: state.activeLeagueId,
    isPlayersActive: state.isPlayersActive,
    favoriteTeams: state.favoriteTeams,
});

const mapDispatchToProps = dispatch => ({
    togglePlayersFixtures: () => dispatch(togglePlayersFixtures()),
    addFavoriteTeam: (team, idLeague) => dispatch(addFavoriteTeam(team, idLeague)),
    deleteFavoriteTeam: teamId => dispatch(deleteFavoriteTeam(teamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OneTeam);
