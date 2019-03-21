import { connect } from 'react-redux';
import FixturesList from '../components/Team/Fixtures/FixturesList';
import * as fixtureDetails from '../actions/fixtureDetails';

const mapStateToProps = state => ({
    currentTeamId: state.currentTeam.team.teamId,
    leagueId: state.activeLeagueId,
    fixtureDetails: state.fixtureDetails,
    fixtures: !state.isPlayersActive ? state.pagination.entities : null,
});

const mapDispatchToProps = dispatch => ({
    updateDetails: (
        activeLeagueId,
        activeItemId,
        currentTeamId,
        secondTeam,
    ) => dispatch(fixtureDetails.updateFixtureDetails(
        activeLeagueId,
        activeItemId,
        currentTeamId,
        secondTeam,
    )),
});

export default connect(mapStateToProps, mapDispatchToProps)(FixturesList);
