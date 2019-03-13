import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TeamItem = ({
    teamId, name, shortName, imgURL, isFavorite,
}) => (
    <div className='teamItem'>
        <div className='crestImg'>
            <img src={imgURL} />
        </div>
        <div className='teamInfo'>
            <Link to={`/teams/${teamId}`} className='teamName'>{name}</Link>
            <span className='teamShortName'>short name: {shortName}</span>
            <button className='addToFavorite'>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</button>
        </div>
    </div>
);

TeamItem.propTypes = {
    teamId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
};

const TeamsList = ({ teamsArray }) => teamsArray && (
    <section className='teamsList'>
        {teamsArray.map(item => (
            <TeamItem
                key={item.teamId}
                teamId={item.teamId}
                name={item.name}
                shortName={item.shortName}
                imgURL={item.imgURL}
                isFavorite={item.isFavorite}
            />
        ))}
    </section>
);

TeamsList.propTypes = {
    teamsArray: PropTypes.array,
};

export default TeamsList;
