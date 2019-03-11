import React from 'react';
import PropTypes from 'prop-types';

const TeamItem = ({ name, shortName, imgURL }) => (
    <div className='teamItem'>
        <div className='crestImg'>
            <img src={imgURL} />
        </div>
        <div className='teamInfo'>
            <span className='teamName'>{name}</span>
            <span className='teamShortName'>short name: {shortName}</span>
            <button>Add team to favorites</button>
        </div>
    </div>
);

TeamItem.propTypes = {
    name: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
};

const TeamsList = ({ teamsArray }) => (
    <section className='teamsList'>
        {teamsArray.map(item => (
            <TeamItem
                key={item.id}
                name={item.name}
                shortName={item.shortName}
                imgURL={item.imgURL}
            />
        ))}
    </section>
);

TeamsList.propTypes = {
    teamsArray: PropTypes.array.isRequired,
};

export default TeamsList;
