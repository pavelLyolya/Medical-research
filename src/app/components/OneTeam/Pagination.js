import React from 'react';
// import PropTypes from 'prop-types';

class Pagination extends React.Component {
    render() {
        return (
            <div className='pagination'>
                <select defaultValue='5' className='chooseCount'>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                </select>
                <span className='firstPage'>first</span>
                <span className='prevPage'>prev</span>
                <span className='pageNumber'>1/6</span>
                <span className='nextPage'>next</span>
                <span className='lastPage'>last</span>
            </div>
        );
    }
}

// Pagination.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default Pagination;
