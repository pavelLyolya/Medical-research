import React from 'react';
// import PropTypes from 'prop-types';

const DateChooser = () => (
    <div className='dateChooser'>
        <form className='dateForm'>
            <div className='rowChooserForm'>
                <label htmlFor="start">Start date:</label>
                <input
                    type="date"
                    id="start"
                    name="trip-start"
                    defaultValue="2018-07-22"
                />
            </div>
            <div className='rowChooserForm'>
                <label htmlFor="end">End date:</label>
                <input
                    type="date"
                    id="end"
                    name="trip-start"
                    defaultValue="2018-07-22"
                />
            </div>
        </form>
    </div>
);

// Players.propTypes = {
//     players: PropTypes.array.isRequired,
// };

export default DateChooser;
