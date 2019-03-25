import { connect } from 'react-redux';
import DateChooser from '../components/Team/Fixtures/DateChooser';
import * as date from '../actions/updateDate';

const mapStateToProps = state => ({
    dateFrom: state.date.dateFrom,
    dateTo: state.date.dateTo,
});

const mapDispatchToProps = dispatch => ({
    updateDateFrom: dateString => dispatch(date.updateDateFrom(dateString)),
    updateDateTo: dateString => dispatch(date.updateDateTo(dateString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateChooser);
