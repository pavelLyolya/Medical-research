import { connect } from 'react-redux';
import changeActiveLeague from '../actions/changeActiveLeague';
import { pageNames } from '../services/constants';
import changeActivePage from '../actions/changeActivePage';
import fetchStandings from '../actions/fetchStandings';
import TableStandings from '../components/TableStandings/TableStandings';

const mapState = state => ({
    activeLeagueId: state.activeLeagueId,
    leagues: state.leagues,
});

const mapDispatch = dispatch => ({
    activateTable: () => dispatch(changeActivePage(pageNames.TABLE)),
    deactivateTable: () => dispatch(changeActivePage('')),
    changeActiveLeague: id => dispatch(changeActiveLeague(id)),
    fetchStandings: id => dispatch(fetchStandings(id)),
});

export default connect(mapState, mapDispatch)(TableStandings);
