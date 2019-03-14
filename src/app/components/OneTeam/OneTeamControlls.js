import React from 'react';
// import PropTypes from 'prop-types';

class OneTeamControlls extends React.Component {
    render() {
        return (
            <div className='oneTeamControlls'>
                <button className='teamControll'>players</button>
                <button className='teamControll'>fixtures</button>
            </div>
        );
    }
}

// OneTeamControlls.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default OneTeamControlls;
