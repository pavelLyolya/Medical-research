import { connect } from 'react-redux';
import changeActivePage from '../actions/changeActivePage';
import Navigation from '../components/Header/Navigation';

const mapState = state => ({
    activePageName: state.activePageName,
});

const mapDispatch = dispatch => ({
    changeActivePage: e => dispatch(changeActivePage(e)),
});

export default connect(mapState, mapDispatch)(Navigation);
