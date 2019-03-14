import React from 'react';
// import PropTypes from 'prop-types';
import TeamsHeader from '../Teams/TeamsHeader';
import '../../../css/OneTeam.scss';

// const tweets = [
//     {
//         header: '@attente9 at Wed Feb 21 2018',
//         text: 'lorem ipsum dolor sciptula. lorem ipsum dolor sciptula!',
//     },
//     {
//         header: '@attente9 at Wed Feb 21 2018',
//         text: 'lorem ipsum dolor sciptula. lorem ipsum dolor sciptula!',
//     },
//     {
//         header: '@attente9 at Wed Feb 21 2018',
//         text: 'lorem ipsum dolor sciptula. lorem ipsum dolor sciptula!',
//     },
//     {
//         header: '@attente9 at Wed Feb 21 2018',
//         text: 'lorem ipsum dolor sciptula. lorem ipsum dolor sciptula!',
//     },
// ];

class Tweets extends React.Component {
    render() {
        return (
            <div className='tweets'>
                <TeamsHeader headerName='Tweets about the team' />
            </div>
        );
    }
}

// Teams.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default Tweets;
