import React from 'react';
// import PropTypes from 'prop-types';
import TeamsHeader from '../Teams/TeamsHeader';
import TweetsList from './TweetsList';

const tweets = [
    {
        id: 1,
        header: '@attente9 at Wed Feb 21 2018',
        text: 'lorem ipsum dolor sciptula. lorem ipsum dolor sciptula!',
    },
    {
        id: 2,
        header: '@attente9 at Wed Feb 21 2018',
        text: 'lorem ipsum dolor sciptula. lorem ipsum dolor sciptula!',
    },
    {
        id: 3,
        header: '@attente9 at Wed Feb 21 2018',
        text: 'lorem ipsum dolor sciptula. lorem ipsum dolor sciptula!',
    },
    {
        id: 4,
        header: '@attente9 at Wed Feb 21 2018',
        text: 'lorem ipsum dolor sciptula. lorem ipsum dolor sciptula!',
    },
];

class Tweets extends React.Component {
    render() {
        return (
            <div className='tweets'>
                <TeamsHeader headerName='Tweets about the team' />
                <TweetsList tweets={tweets} />
            </div>
        );
    }
}

// Teams.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default Tweets;
