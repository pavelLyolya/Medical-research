import React from 'react';
// import PropTypes from 'prop-types';
import TeamsHeader from '../Teams/TeamsHeader';
import PlayersList from './PlayersList';
import '../../../css/OneTeam.scss';

const players = [
    {
        id: 1,
        name: 'Bernd Leno',
        position: 'Goalkeeper',
        dateOfBirth: '1992-03-04T00:00:00Z',
        shirtNumber: 2,
    },
    {
        id: 2,
        name: 'Bernd Leno',
        position: 'Goalkeeper',
        dateOfBirth: '1992-03-04T00:00:00Z',
        shirtNumber: 2,
    },
    {
        id: 3,
        name: 'Bernd Leno',
        position: 'Goalkeeper',
        dateOfBirth: '1992-03-04T00:00:00Z',
        shirtNumber: 2,
    },
    {
        id: 4,
        name: 'Bernd Leno',
        position: 'Goalkeeper',
        dateOfBirth: '1992-03-04T00:00:00Z',
        shirtNumber: 2,
    },
];

class Players extends React.Component {
    render() {
        return (
            <div className='players'>
                <TeamsHeader headerName='Players' />
                <PlayersList players={players} />
            </div>
        );
    }
}

// Teams.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default Players;
