import { connect } from 'react-redux';
import changeActiveLeague from '../actions/changeActiveLeague';
import fetchStandings from '../actions/fetchStandings';
import Table from '../components/Table/Table';

const mapState = state => ({
    activeLeagueId: state.activeLeagueId,
    leagues: state.leagues,
});

const mapDispatch = dispatch => ({
    changeActiveLeague: id => dispatch(changeActiveLeague(id)),
    fetchStandings: id => dispatch(fetchStandings(id)),
});

export default connect(mapState, mapDispatch)(Table);
