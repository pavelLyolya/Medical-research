import React from 'react';
import PropTypes from 'prop-types';

class DateChooser extends React.Component {
    constructor(props) {
        super(props);
        this.updateDateFrom = this.updateDateFrom.bind(this);
        this.updateDateTo = this.updateDateTo.bind(this);
    }

    updateDateFrom(e) {
        if (e.target.value) {
            this.props.updateDateFrom(e.target.value);
        }
    }

    updateDateTo(e) {
        if (e.target.value) {
            this.props.updateDateTo(e.target.value);
        }
    }

    render() {
        return (
            <div className='dateChooser'>
                <form className='dateForm'>
                    <div className='rowChooserForm'>
                        <label htmlFor="start">Start date:</label>
                        <input
                            type="date"
                            id="start"
                            name="trip-start"
                            defaultValue={this.props.dateFrom}
                            onChange={this.updateDateFrom}
                        />
                    </div>
                    <div className='rowChooserForm'>
                        <label htmlFor="end">End date:</label>
                        <input
                            type="date"
                            id="end"
                            name="trip-start"
                            defaultValue={this.props.dateTo}
                            onChange={this.updateDateTo}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

DateChooser.propTypes = {
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    updateDateFrom: PropTypes.func.isRequired,
    updateDateTo: PropTypes.func.isRequired,
};

export default DateChooser;
