import React from 'react';
import PropTypes from 'prop-types';

class DateChooser extends React.Component {
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
                        />
                    </div>
                    <div className='rowChooserForm'>
                        <label htmlFor="end">End date:</label>
                        <input
                            type="date"
                            id="end"
                            name="trip-start"
                            defaultValue={this.props.dateTo}
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
};

export default DateChooser;
