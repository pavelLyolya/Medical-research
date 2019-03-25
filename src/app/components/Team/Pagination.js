import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.isPlayersActive) {
            this.mainArray = this.props.mainArray.filter(item => (
                item.utcDate >= props.dateFrom && item.utcDate <= props.dateTo
            ));
        } else {
            this.mainArray = props.mainArray;
        }
        this.changeCountPerPage = this.changeCountPerPage.bind(this);
        this.goToFirst = this.goToFirst.bind(this);
        this.goToPrev = this.goToPrev.bind(this);
        this.goToNext = this.goToNext.bind(this);
        this.goToLast = this.goToLast.bind(this);
    }

    componentDidMount() {
        this.props.setPagesNumber(this.mainArray, this.props.itemsPerPage);
        this.props.setPaginated(
            this.mainArray, this.props.itemsPerPage, this.props.currentPage,
        );
    }

    componentDidUpdate(prevProps) {
        if (!this.props.isPlayersActive
            && (prevProps.dateFrom !== this.props.dateFrom
                || prevProps.dateTo !== this.props.dateTo)) {
            this.mainArray = this.props.mainArray.filter(item => (
                item.utcDate >= this.props.dateFrom && item.utcDate <= this.props.dateTo
            ));
            this.props.setPagesNumber(this.mainArray, this.props.itemsPerPage);
            this.props.setPaginated(
                this.mainArray, this.props.itemsPerPage, this.props.currentPage,
            );
        }
    }

    componentWillUnmount() {
        // this.props.clearPagination();
    }

    changeCountPerPage(e) {
        this.props.changeCountPerPage(+e.target.value);
        this.props.setPagesNumber(this.mainArray, +e.target.value);
        this.props.setPaginated(this.mainArray, +e.target.value, 1);
    }

    goToFirst() {
        this.props.goToFirst();
        this.props.setPaginated(
            this.mainArray, this.props.itemsPerPage, 1,
        );
    }

    goToPrev() {
        if (this.props.currentPage > 1) {
            this.props.goToPrev();
            this.props.setPaginated(
                this.mainArray, this.props.itemsPerPage, this.props.currentPage - 1,
            );
        }
    }

    goToNext() {
        if (this.props.currentPage < this.props.pagesNumber) {
            this.props.goToNext();
            this.props.setPaginated(
                this.mainArray, this.props.itemsPerPage, this.props.currentPage + 1,
            );
        }
    }

    goToLast() {
        this.props.goToLast();
        this.props.setPaginated(
            this.mainArray, this.props.itemsPerPage, this.props.pagesNumber,
        );
    }

    render() {
        return (
            <div className='pagination'>
                <select
                    defaultValue='5'
                    onChange={this.changeCountPerPage}
                    className='chooseCount'
                >
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                </select>
                <span
                    onClick={this.goToFirst}
                    className='firstPage'
                >first</span>
                <span
                    onClick={this.goToPrev}
                    className='prevPage'
                >prev</span>
                <span className='pageNumber'>
                    {this.props.currentPage}
                    /
                    {this.props.pagesNumber}
                </span>
                <span
                    onClick={this.goToNext}
                    className='nextPage'
                >next</span>
                <span
                    onClick={this.goToLast}
                    className='lastPage'
                >last</span>
            </div>
        );
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pagesNumber: PropTypes.number,
    itemsPerPage: PropTypes.number.isRequired,
    isPlayersActive: PropTypes.bool,
    mainArray: PropTypes.array,
    entities: PropTypes.array,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    goToNext: PropTypes.func.isRequired,
    goToPrev: PropTypes.func.isRequired,
    goToLast: PropTypes.func.isRequired,
    goToFirst: PropTypes.func.isRequired,
    changeCountPerPage: PropTypes.func.isRequired,
    setPagesNumber: PropTypes.func.isRequired,
    setPaginated: PropTypes.func.isRequired,
    clearPagination: PropTypes.func.isRequired,
};

export default Pagination;
