import React from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

const PlayerItem = ({
    name, position, dateOfBirth, shirtNumber,
}) => (
    <div className='playerItem'>
        <div className='playerInfo'>
            <h3 className='playerName'>{name}</h3>
            <span className='restInfo'>position: {position}</span>
            <span className='restInfo'>date of birth: {new Date(dateOfBirth).toDateString()}</span>
        </div>
        <div className='shirtNumber'>
            <span>{shirtNumber}</span>
            <img src={'https://image.flaticon.com/icons/svg/290/290691.svg'} />
        </div>
    </div>
);

PlayerItem.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string,
    dateOfBirth: PropTypes.string.isRequired,
    shirtNumber: PropTypes.number,
};

const PlayersList = ({ players }) => (
    <React.Fragment>
        <Pagination />
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
    </React.Fragment>
);

PlayersList.propTypes = {
    players: PropTypes.array.isRequired,
};

export default PlayersList;
