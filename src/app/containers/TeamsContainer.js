import { connect } from 'react-redux';
import changeActiveLeague from '../actions/changeActiveLeague';
import fetchTeams from '../actions/fetchTeams';
import Teams from '../components/Teams/Teams';

const mapStateToProps = state => ({
    activeLeagueId: state.activeLeagueId,
    leagues: state.leagues,
});

const mapDispatchToProps = dispatch => ({
    changeActiveLeague: id => dispatch(changeActiveLeague(id)),
    fetchTeams: id => dispatch(fetchTeams(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
