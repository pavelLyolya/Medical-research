import { connect } from 'react-redux';
import changeActiveLeague from '../actions/changeActiveLeague';
import Table from '../components/Table/Table';

const mapState = state => ({
    activeLeague: state.activeLeague,
    leagues: state.leagues,
});

const mapDispatch = dispatch => ({
    changeActiveLeague: id => dispatch(changeActiveLeague(id)),
});

export default connect(mapState, mapDispatch)(Table);
