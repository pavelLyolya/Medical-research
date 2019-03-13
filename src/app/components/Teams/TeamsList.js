import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addTeamToLocalStorage, deleteTeamFromLocalStorage } from '../../services/functions';

class TeamItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    toggleFavorite() {
        if (!this.props.isFavorite) {
            addTeamToLocalStorage(
                this.props.teamId,
                this.props.name,
                this.props.shortName,
                this.props.imgURL,
                this.props.isFavorite,
            );
            this.props.addFavoriteTeam(this.props.teamId, this.props.activeLeagueId);
        } else {
            deleteTeamFromLocalStorage(this.props.teamId);
            this.props.deleteFavoriteTeam(this.props.teamId, this.props.activeLeagueId);
        }
    }

    render() {
        return (
            <div className='teamItem'>
                <div className='crestImg'>
                    <img src={this.props.imgURL} />
                </div>
                <div className='teamInfo'>
                    <Link to={`/teams/${this.props.teamId}`} className='teamName'>{this.props.name}</Link>
                    <span className='teamShortName'>short name: {this.props.shortName}</span>
                    <button className='addToFavorite' onClick={this.toggleFavorite}>
                        {this.props.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    </button>
                </div>
            </div>
        );
    }
}

TeamItem.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    teamId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
};

const TeamsList = ({
    teamsArray,
    activeLeagueId,
    addFavoriteTeam,
    deleteFavoriteTeam,
}) => teamsArray && (
    <section className='teamsList'>
        {teamsArray.map(item => <TeamItem
            key={item.teamId}
            teamId={item.teamId}
            name={item.name}
            shortName={item.shortName}
            imgURL={item.imgURL}
            isFavorite={item.isFavorite}
            activeLeagueId={activeLeagueId}
            addFavoriteTeam={addFavoriteTeam}
            deleteFavoriteTeam={deleteFavoriteTeam}
        />)}
    </section>
);

TeamsList.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
    teamsArray: PropTypes.array,
};

export default TeamsList;
