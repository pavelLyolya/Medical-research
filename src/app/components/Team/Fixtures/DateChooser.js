import React from 'react';
import PropTypes from 'prop-types';

class DateChooser extends React.Component {
    constructor(props) {
        super(props);
        this.updateDateFrom = this.updateDate.bind(this, props.updateDateFrom);
        this.updateDateTo = this.updateDate.bind(this, props.updateDateTo);
    }

    componentDidMount() {
        this.props.setDefaultDates();
    }

    updateDate(callback, e) {
        if (e.target.value) {
            callback(e.target.value);
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
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
    setDefaultDates: PropTypes.func.isRequired,
    updateDateFrom: PropTypes.func.isRequired,
    updateDateTo: PropTypes.func.isRequired,
};

export default DateChooser;
