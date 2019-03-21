import { connect } from 'react-redux';
import Pagination from '../components/Team/Pagination';
import * as pagination from '../actions/pagination';

const mapStateToProps = state => ({
    currentPage: state.pagination.currentPage,
    pagesNumber: state.pagination.pagesNumber,
    itemsPerPage: state.pagination.itemsPerPage,
    isPlayersActive: state.isPlayersActive,
    mainArray: state.isPlayersActive ? state.currentTeam.squad : state.currentTeam.fixtures,
    entities: state.pagination.entities,
});

const mapDispatchToProps = dispatch => ({
    goToNext: () => dispatch(pagination.goToNext()),
    goToPrev: () => dispatch(pagination.goToPrev()),
    goToLast: () => dispatch(pagination.goToLast()),
    goToFirst: () => dispatch(pagination.goToFirst()),
    changeCountPerPage: count => dispatch(pagination.changeCountPerPage(count)),
    setPagesNumber: (array, countPerPage) => dispatch(
        pagination.setPagesNumber(array, countPerPage),
    ),
    setPaginated: (array, countPerPage, pageNumber) => dispatch(
        pagination.setPaginated(array, countPerPage, pageNumber),
    ),
    clearPagination: () => dispatch(pagination.clearPagination()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
