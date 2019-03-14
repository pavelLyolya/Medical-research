import React from 'react';
import PropTypes from 'prop-types';

const PlayerItem = ({
    name, position, dateOfBirth,
}) => (
    <div className='playerItem'>
        <div className='playerInfo'>
            <h3 className='crestImg'>{name}</h3>
            <span>position: {position}</span>
            <span>date of birth: {dateOfBirth}</span>
        </div>
        <div className='shirtNumber'>
            <img src={'https://image.flaticon.com/icons/svg/290/290691.svg'} />
        </div>
    </div>
);

PlayerItem.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    shirtNumber: PropTypes.number.isRequired,
};

const PlayersList = ({ players }) => (
    <section className='playersList'>
        {players.map(item => (
            <PlayerItem
                key={item.id}
                name={item.name}
                position={item.position}
                dateOfBirth={item.dateOfBirth}
                shirtNumber={item.shirtNumber}
            />
        ))}
    </section>
);

PlayersList.propTypes = {
    players: PropTypes.array.isRequired,
};

export default PlayersList;
