import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isFavorite } from '../../services/functions';

export class TeamItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    toggleFavorite() {
        if (!this.props.isFavorite) {
            this.props.addFavoriteTeam(this.props.team, this.props.activeLeagueId);
        } else {
            this.props.deleteFavoriteTeam(this.props.team.teamId);
        }
    }

    render() {
        return (
            <div className='teamItem'>
                <div className='crestImg'>
                    <img src={this.props.team.imgURL} />
                </div>
                <div className='teamInfo'>
                    <Link to={`/teams/${this.props.team.teamId}`} className='teamName'>{this.props.team.name}</Link>
                    <span className='teamShortName'>short name: {this.props.team.shortName}</span>
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
    team: PropTypes.object.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
};

const TeamsList = ({
    teamsArray,
    activeLeagueId,
    addFavoriteTeam,
    deleteFavoriteTeam,
    favoriteTeams,
}) => teamsArray && (
    <section className='teamsList'>
        {teamsArray.map(item => <TeamItem
            key={item.teamId}
            team={item}
            isFavorite={isFavorite(favoriteTeams, item.teamId)}
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
    favoriteTeams: PropTypes.array.isRequired,
    teamsArray: PropTypes.array,
};

export default TeamsList;
