import { connect } from 'react-redux';
import changeActivePage from '../actions/changeActivePage';
import { pageNames } from '../actions/actionTypes';
import Navigation from '../components/Header/Navigation';

const mapStateToProps = state => ({
    activePageName: state.activePageName,
});

const mapDispatchToProps = dispatch => ({
    activateTable: () => dispatch(changeActivePage(pageNames.TABLE)),
    activateTeams: () => dispatch(changeActivePage(pageNames.TEAMS)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
